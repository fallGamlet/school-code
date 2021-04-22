const colorThemes = {
  light: {
    bg: "#ffffff",
    text: "#333333",
    primary: "#3333aa",
    shadow: "#00000030"
  }, 
  dark: {
    bg: "#333333",
    text: "#ffffff",
    primary: "#3333aa",
    shadow: "#ffffff30"
  }
}

let isLight = true;

const changeThemeBtn = document.querySelector('#btn-change-theme')

changeThemeBtn.onclick = () => {
  let colors = {};
  let fontSize = '1em';
  isLight = !isLight;
  if (isLight) {
    colors = colorThemes.light;
    fontSize = '1em';
  } else {
    colors = colorThemes.dark;
    fontSize = '1.2em';
  }

  console.log("change color theme");
  console.log(colors);

  const rootView = document.querySelector(':root')
  rootView.style.setProperty("--bg-color", colors.bg);
  rootView.style.setProperty("--text-color", colors.text);
  rootView.style.setProperty("--primary-color", colors.primary);
  rootView.style.setProperty("--shadow-color", colors.shadow);
  rootView.style.setProperty("--text-size-base", fontSize);
}