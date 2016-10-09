class RankingService {

  constructor($http, USE_LOCAL_HOST, REMOTE_HOST_URL, LOCAL_HOST_URL) {
    this.$http = $http;
    this.base_url = USE_LOCAL_HOST ? LOCAL_HOST_URL : REMOTE_HOST_URL;
  }

  index(format, week) {
    return this.$http.get(`${this.base_url}rankings`, { params: { format, week }, cache: true })
      .then(response => {
        this.updatedAt = response.data.updated_at;
        return response.data;
      });
  }

}

export default RankingService;
