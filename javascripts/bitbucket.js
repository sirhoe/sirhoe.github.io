var bitbucket = (function(){
  function escapeHtml(str) {
    return $('<div/>').text(str).html();
  }
  function render(target, repos){
    var i = 0, fragment = '', t = $(target)[0];

    for(i = 0; i < repos.length; i++) {
      fragment += '<a class="list-group-item" href="'+repos[i].links.html.href+'"><h4 class="list-group-item-heading">'+repos[i].name+'</h4><p>'+escapeHtml(repos[i].description||'')+'</p></a>';
    }
    t.innerHTML = fragment;
  }
  return {
    showRepos: function(options){
      $.ajax({
          url: "https://bitbucket.org/api/2.0/repositories/"+options.user
        , dataType: 'jsonp'
        , error: function (err) { $(options.target + ' li.loading').addClass('error').text("Error loading feed"); }
        , success: function(data) {
          var repos = [];
          if (!data || !data.values) { return; }
          for (var i = 0; i < data.values.length; i++) {
            if (options.skip_forks && data.values[i].parent) { continue; }
            repos.push(data.values[i]);
          }
          if (options.count) { repos.splice(options.count); }
          render(options.target, repos);
        }
      });
    }
  };
})();