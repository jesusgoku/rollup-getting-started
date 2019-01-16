import axios from 'axios';

export default class DarkSky {
  constructor(apiKey) {
    this.baseURL = 'https://api.darksky.net/forecast';
    this.apiKey = apiKey;
  }

  request(userOptions) {
    const {
      params = {},
      headers = {},
      ...restOptions
    } = userOptions;

    return axios({
      baseURL: `${this.baseURL}/${this.apiKey}`,
      headers: {...headers},
      params: {...params},
      ...restOptions,
    })
      .then(res => res.data);
  }

  getForecast(lat, lng, params = {}) {
    return this.request({
      params,
      url: `/${lat},${lng}`,
    });
  }

  getCurrentForecast(lat, lng, params = {}) {
    return this.getForecast(lat, lng, {
      params: {
        exclude: ['minutely', 'hourly', 'daily', 'alerts', 'flags'].join(','),
        ...params,
      },
    });
  }
}
