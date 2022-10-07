import request from '../base'
/**
 * Simple REST api class
 */
class Resource {
  /**
   * متد سازنده
   * ======================================================
   * در صورتی که دستوری نیاز به token داشته باشد، مقدار
   * توکن به پارامتر دوم متد ارسال میشد.
   * @param uri
   * @param token
   */
  constructor(uri, token) {
    this.uri = uri
    if (token !== undefined) {
      request.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }

  list(query) {
    return request({
      url: this.uri,
      method: 'get',
      params: query,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  search(query, params) {
    const data = {
      url: this.uri,
      method: 'post',
      data: query,
    }
    if (params !== undefined) {
      data.params = params
    }
    return request(data).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  get(id) {
    let url = this.uri
    if (id !== undefined) {
      url += id
    }
    return request({
      url,
      method: 'get',
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  store(resource) {
    return request({
      url: '/' + this.uri,
      method: 'post',
      data: resource,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  /**
   * در صورت ارسال فایل از این متد ارسال شود.
   * ======================================================
   * @param resource
   * @returns {AxiosPromise}
   */
  storeFile(resource) {
    request.defaults.headers.common['Content-Type'] = 'multipart/form-data'

    return request({
      url: '/' + this.uri,
      method: 'post',
      data: resource,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  update(id, resource) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'put',
      data: resource,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  put(resource) {
    return request({
      url: '/' + this.uri,
      method: 'put',
      data: resource,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  destroy(ids, showDefaultError = false) {
    return request({
      url: this.uri,
      method: 'delete',
      data: ids,
    }).catch((err) => {
      if (showDefaultError) {
        if (err.response.status === 500) {
          this.showErrorMessage('خطایی رخ داد!')
        } else {
          this.showErrorMessage(err.response.data.message)
        }
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  downloadFile(query) {
    const data = {
      url: '/' + this.uri,
      method: 'get',
      params: query,
      responseType: 'blob',
    }
    return request(data).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  /* ?
   ? It used for get an item of some thing
   ? If you want to print an item then send true
   ? */
  getAnItem(id, params, print = false) {
    if (print) {
      const data = {
        url: '/' + this.uri + '/' + id,
        method: 'get',
        params,
        responseType: 'blob',
      }
      return request(data).catch((err) => {
        if (err.response.status === 500) {
          this.showErrorMessage('خطایی رخ داد!')
        } else {
          this.showErrorMessage(err.response.data.message)
        }
        if (err.response.status === 401) {
          this.expiredWork()
        }
      })
    } else {
      const data = {
        url: '/' + this.uri + '/' + id,
        method: 'get',
        params,
      }
      return request(data).catch((err) => {
        if (err.response.status === 500) {
          this.showErrorMessage('خطایی رخ داد!')
        } else {
          this.showErrorMessage(err.response.data.message)
        }
        if (err.response.status === 401) {
          this.expiredWork()
        }
      })
    }
  }

  deleteAnItem(id) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'delete',
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  editAnItem(id, params) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'put',
      data: params,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  editAnItemGeneric(id, params) {
    return request({
      url: '/' + this.uri + '/' + id,
      method: 'patch',
      data: params,
    }).catch((err) => {
      if (err.response.status === 500) {
        this.showErrorMessage('خطایی رخ داد!')
      } else {
        this.showErrorMessage(err.response.data.message)
      }
      if (err.response.status === 401) {
        this.expiredWork()
      }
    })
  }

  /* ! This method use for expired users */
  expiredWork() {
    window.$nuxt.$options.store.dispatch('auth/logoutConfig').then(() => {})
    window.$nuxt.$options.router.replace('/').then(() => {})
  }

  /* ! This method use for show error messages */
  showErrorMessage(message) {
    console.error(message)
  }
}

export { Resource as default }
