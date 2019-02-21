$(document).ready(function(){
  $('#searchuser').on('keyup',function(e){
    let username = e.target.value;

    //Request to github
    $.ajax({
      url:'https://api.github.com/users/'+username,
      data:{
        client_id:'85d3a08859829a62cb51',
        client_secret:'fd263388bed188c53c0a8cd9c577696c650aa5fa'
      }
    }).done(function(user){
      $('#profile').html(`
        <div class="card">
  <div class="card-header">
    ${user.name}
  </div>
  <div class="card-body">
  <div class="row">
  <div class="col-md-3">
  <img src="${user.avatar_url}" class="thumbnail avatar"/>
  <br>
  <a target="_blank" class="btn btn-primary btn-block" href="${user.html_url}">View Profile</a>
  </div>
  <div class="col md-9">
  <span class="badge badge-pill badge-primary">Public Repos: ${user.public_repos}</span>
<span class="badge badge-pill badge-secondary">Public Gists: ${user.public_gists}</span>
<span class="badge badge-pill badge-success">Followers: ${user.followers}</span>
<span class="badge badge-pill badge-danger">Following: ${user.following}</span></div>
<br><br>
<ul class="list-group">
<li class="list-group-item">Company: ${user.company}</li>
<li class="list-group-item">Website/blog: ${user.blog}</li>
<li class="list-group-item">Location: ${user.location}</li>
<li class="list-group-item">Member since: ${user.created_at}</li>
</ul>
  </div>
    </div>
</div>
        `);
    });

  });
});
