export const api = {
  url: 'http://localhost:1337/restaurants',

  async request(method = 'GET', url, body = null) {
    try {
      const response = await fetch(url || this.url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        ...(method !== 'GET' && { body: JSON.stringify(body) }),
      });

      const data = await response.json();

      return {
        success: response.ok,
        status: response.status,
        data,
      };
    } catch (err) {
      return {
        message: err.message,
        success: false,
        error: true,
      }
    }
  },

  async get() {
    const result = await this.request();
    return result;
  },
  async post(bodyData) {
    return await this.request('POST', null, bodyData);
  },
  async put(id, bodyData) {
    return await this.request('PUT', `${this.url}/${id}`, bodyData);
  },
  async delete(id) {
    return await this.request('DELETE', `${this.url}/${id}`  );
  },
};
