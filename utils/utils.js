export function scrollTo(elementId) {
  const element = document.getElementById(elementId)

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  })
}

export function scrollToBottom (id) {
  const element = document.getElementById(id);
  element.scrollTop = element.scrollHeight;
}

export function sectionHeight(className) {
  if (document.getElementsByClassName(className)[0])
    return document.getElementsByClassName(className)[0].clientHeight;
  else return 0
}

export function parentSectionHeight(className) {
  return document.getElementsByClassName(className)[0]
}
