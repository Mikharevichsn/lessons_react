export const api = {
  async post({ data, url }) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
      throw new Error(error);
    }
  },
};
