import { ref, useContext } from '@nuxtjs/composition-api'
import { $fetch } from 'ohmyfetch'

export function useChatBot() {
  const { query, $config } = useContext()
  const message = ref('')
  const chatResult = ref('')
  const pending = ref(false)

  const apiURL = 'http://127.0.0.1:8000/api'

  const sendMessage = () => {
    // Cancel empty message
    if (!message.value || !message.value.trim()) return

    pending.value = true
    $fetch(`${apiURL}/get_prompt_result/`, {
      method: 'POST',
      headers: {
        Accept: '*/*'
      },
      body: {
        prompt: message.value
      }
    })
      .then(result => {
        chatResult.value = result
        console.log(chatResult)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => (pending.value = false))
  }

  return {
    message,
    chatResult,
    pending,
    sendMessage
  }
}
