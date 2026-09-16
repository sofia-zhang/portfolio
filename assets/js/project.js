function getParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProject(){
  const id = getParam("id");
  const project = PROJECTS.find(p => p.id === id);
  const container = document.getElementById("project-container");

  if (!project) {
    container.innerHTML = '<div class="not-found"><p>Project not found.</p><a href="index.html">Back to work</a></div>';
    return;
  }

  document.title = project.title + " \u2014 work";

  let html = "";
  html += '<div class="project-header">';
  html += '<a class="back" href="index.html">\u2190 back to work</a>';
  html += '<h1>' + project.title + '</h1>';
  html += '</div>';

  html += '<div class="project-layout">';

  html += '<div class="project-media">';
  project.gallery.forEach(item => {
    html += '<figure>';
    if (item.type === "video") {
      if (item.loop) {
        html += '<video src="' + item.src + '" autoplay muted loop playsinline></video>';
      } else {
        html += '<video src="' + item.src + '" controls playsinline></video>';
      }
    } else {
      html += '<img src="' + item.src + '" alt="' + project.title + '">';
    }
    if (item.caption) {
      html += '<figcaption>' + item.caption + '</figcaption>';
    }
    html += '</figure>';
  });
  html += '</div>';

  html += '<div class="project-info">';
  html += '<div class="meta">';
  html += '<span>' + project.date + '</span>';
  html += '<span>' + project.role + '</span>';
  if (project.tools && project.tools.length) {
    html += '<span>' + project.tools.join(" \u00b7 ") + '</span>';
  }
  html += '</div>';

  if (project.links && project.links.length) {
    html += '<div class="project-links">';
    project.links.forEach(l => {
      html += '<a href="' + l.url + '" target="_blank" rel="noopener">' + l.label + ' \u2197</a>';
    });
    html += '</div>';
  }
  
  html += '<div class="project-body">';
  project.description.forEach(p => {
    html += '<p>' + p + '</p>';
  });
  html += '</div>';

  
  html += '</div>';

  html += '</div>';

  container.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", renderProject);
