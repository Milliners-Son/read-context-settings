//Get content of meta tag via name
function getMetaContent(name) {
  const metaTags = [...document.getElementsByTagName("meta")];

  for (var i in metaTags) {
    let tag = metaTags[i];
    if (name == tag.getAttribute("name")) return tag.getAttribute("content");
  }
  return false;
}

//Read the context settings from the API (if available)
function readAPIContextSettings() {
  let contextSettings = {};
  try {
    contextSettings =
      window.__API__.document.loaders.articledetail.contextSettings;
  } catch (err) {
    return false;
  }
  return contextSettings;
}

//Try both API (PL) and meta tags (Phase 1) to get context setting
const getContextSetting = (name) => {
  let plContext = readAPIContextSettings();
  return plContext ? plContext["meta.data.name"][name] : getMetaContent(name);
};

export default getContextSetting;
