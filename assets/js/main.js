const MONTHS = {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11};

function parseDatePart(str){
  str = (str || "").trim();
  if (/present/i.test(str)) return new Date(9999, 11, 31);
  const m = str.match(/([A-Za-z]{3,})\.?\s+(\d{4})/);
  if (m) {
    const mon = MONTHS[m[1].slice(0,3).toLowerCase()] ?? 0;
    return new Date(parseInt(m[2], 10), mon, 1);
  }
  return new Date(0);
}

function getDateRange(project){
  const parts = (project.date || "").split(/[\u2013\u2014-]/).map(s => s.trim());
  const start = parseDatePart(parts[0]);
  const end = parts[1] ? parseDatePart(parts[1]) : start;
  return { start, end };
}

function sortedProjects(){
  return [...PROJECTS].sort((a, b) => {
    const ra = getDateRange(a), rb = getDateRange(b);
    if (rb.end - ra.end !== 0) return rb.end - ra.end;
    return rb.start - ra.start;
  });
}

function renderGrid(){
  const grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";
  sortedProjects().forEach(p => {
    const a = document.createElement("a");
    a.className = "card";
    a.href = "project.html?id=" + encodeURIComponent(p.id);

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    if (p.thumbType === "video") {
      const v = document.createElement("video");
      v.src = p.thumb;
      if (p.poster) v.poster = p.poster;
      v.muted = true;
      v.autoplay = true;
      v.loop = true;
      v.playsInline = true;
      v.preload = "auto";
      thumb.appendChild(v);
    } else {
      const img = document.createElement("img");
      img.src = p.thumb;
      img.alt = p.title;
      thumb.appendChild(img);
    }

    const cap = document.createElement("div");
    cap.className = "cap";
    cap.innerHTML = '<span class="title">' + p.title + '</span><span class="tag">' + p.tag + '</span>';

    a.appendChild(thumb);
    a.appendChild(cap);
    grid.appendChild(a);
  });
}

document.addEventListener("DOMContentLoaded", renderGrid);
