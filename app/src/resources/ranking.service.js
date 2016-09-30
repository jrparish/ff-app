export default function RankingService($resource, $http, USE_LOCAL_HOST, REMOTE_HOST_URL, LOCAL_HOST_URL) {
  var resource, base_url;

  resource = {};

  if(USE_LOCAL_HOST) {
    base_url = LOCAL_HOST_URL;
  } else {
    base_url = REMOTE_HOST_URL;
  }

  resource.index = function(format, week) {
    return $http.get(base_url + 'rankings', {params: {format: format, week: week}, cache: true});
  }

  return resource;
}
