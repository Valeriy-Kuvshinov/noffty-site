import { IconDictionary } from "../models/utility"

export class SvgService {
  private icons: IconDictionary = {
    globe: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m5.2 5.3c.4 0 .7.3 1.1.3-.3.4-1.6.4-2-.1.3-.1.5-.2.9-.2M1 8c0-.4 0-.8.1-1.3.1 0 .2.1.3.1 0 0 .1.1.1.2 0 .3.3.5.5.5.8.1 1.1.8 1.8 1 .2.1.1.3 0 .5-.6.8-.1 1.4.4 1.9.5.4.5.8.6 1.4 0 .7.1 1.5.4 2.2C2.7 13.3 1 10.9 1 8m7 7c-.7 0-1.5-.1-2.1-.3q-.15-.3 0-.6c.4-.8.8-1.5 1.3-2.2.2-.2.4-.4.4-.7 0-.2.1-.5.2-.7.3-.5.2-.8-.2-.9-.8-.2-1.2-.9-1.8-1.2s-1.2-.5-1.7-.2c-.2.1-.5.2-.5-.1 0-.4-.5-.7-.4-1.1-.1 0-.2 0-.3.1s-.2.2-.4.1c-.2-.2-.1-.4-.1-.6.1-.2.2-.3.4-.4.4-.1.8-.1 1 .4.3-.9.9-1.4 1.5-1.8 0 0 .8-.7.9-.7s.2.2.4.3c.2 0 .3 0 .3-.2.1-.5-.2-1.1-.6-1.2 0-.1.1-.1.1-.1.3-.1.7-.3.6-.6 0-.4-.4-.6-.8-.6-.2 0-.4 0-.6.1-.4.2-.9.4-1.5.4C5.2 1.4 6.6 1 8 1h.8c-.6.1-1.2.3-1.6.5.6.1.7.4.5.9-.1.2 0 .4.2.5s.4.1.5-.1c.2-.3.6-.4.9-.5.4-.1.7-.3 1-.7 0-.1.1-.1.2-.2.6.2 1.2.6 1.8 1-.1 0-.1.1-.2.1-.2.2-.5.3-.2.7.1.2 0 .3-.1.4-.2.1-.3 0-.4-.1s-.1-.3-.4-.3c-.1.2-.4.3-.4.6.5 0 .4.4.5.7-.6.1-.8.4-.5.9.1.2-.1.3-.2.4-.4.6-.8 1-.8 1.7s.5 1.4 1.3 1.3c.9-.1.9-.1 1.2.7 0 .1.1.2.1.3.1.2.2.4.1.6-.3.8.1 1.4.4 2 .1.2.2.3.3.4-1.3 1.4-3 2.2-5 2.2"/>
    </svg>`,

    home: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
      <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"/>
    </svg>`,

    back: `<svg width="64" height="64" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.06 2.06 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.06 2.06 0 0 0-2.845 0"/>
    </svg>`,

    camera: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill="#333235" d="M11 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
      <path fill="#333235" d="M11 4V1H5v3H0v9h5c.8.6 1.9 1 3 1s2.2-.4 3-1h5V4zM6 2h4v2H6zm2 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4m7-7h-2V5h2z"/>
    </svg>`,

    rhombus: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.576 1.424a.6.6 0 0 1 .848 0l10.152 10.152a.6.6 0 0 1 0 .848L12.424 22.576a.6.6 0 0 1-.848 0L1.424 12.424a.6.6 0 0 1 0-.848z" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,

    discord: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.6 18.6 0 0 0-5.487 0 12 12 0 0 0-.617-1.23A.08.08 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.1.1 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20 20 0 0 0 5.993 2.98.08.08 0 0 0 .084-.026 14 14 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13 13 0 0 1-1.872-.878.075.075 0 0 1-.008-.125q.19-.14.372-.287a.08.08 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.08.08 0 0 1 .079.009q.18.148.372.288a.075.075 0 0 1-.006.125q-.895.515-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.08.08 0 0 0 .084.028 20 20 0 0 0 6.002-2.981.08.08 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028M8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38m7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38"/>
    </svg>`,

    itch: `<svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.172 1.787C2.776 2.615.027 5.771 0 6.599v1.375c0 1.735 1.625 3.267 3.099 3.267 1.771 0 3.251-1.469 3.251-3.213 0 1.744 1.421 3.213 3.197 3.213 1.771 0 3.151-1.469 3.151-3.213 0 1.744 1.516 3.213 3.287 3.213h.032c1.776 0 3.291-1.469 3.291-3.213 0 1.744 1.381 3.213 3.152 3.213s3.197-1.469 3.197-3.213c0 1.744 1.475 3.213 3.245 3.213 1.479 0 3.104-1.532 3.104-3.267V6.599c-.032-.828-2.776-3.984-4.177-4.812-4.339-.156-7.344-.183-11.823-.183-4.484.005-10.593.073-11.828.183zm8.505 8.634a3.7 3.7 0 0 1-.625.797v.005a3.73 3.73 0 0 1-2.599 1.057 3.7 3.7 0 0 1-2.599-1.063 3.4 3.4 0 0 1-.6-.787c-.167.297-.4.552-.645.787A3.7 3.7 0 0 1 3.01 12.28h-.005a1.1 1.1 0 0 1-.349-.073 55 55 0 0 0-.224 3.937v.005c-.005.527-.005.953-.011 1.552.032 3.115-.307 10.089 1.376 11.803 2.604.604 7.396.88 12.197.885h.005c4.807-.005 9.593-.281 12.197-.885 1.683-1.713 1.344-8.688 1.376-11.803-.005-.599-.005-1.025-.011-1.552v-.005a52 52 0 0 0-.224-3.937 1 1 0 0 1-.349.073h-.005a3.7 3.7 0 0 1-2.599-1.063h.005c-.245-.235-.479-.489-.645-.787h-.005a3.4 3.4 0 0 1-.595.787 3.71 3.71 0 0 1-5.198 0 3.6 3.6 0 0 1-.615-.787l-.011-.016c-.172.308-.38.573-.615.803a3.7 3.7 0 0 1-2.599 1.063h-.005q-.048.001-.104-.005-.054.006-.109.005h-.005a3.7 3.7 0 0 1-2.593-1.063 3.4 3.4 0 0 1-.609-.787l-.011-.016zm-2.672 3.454c1.057.005 1.995 0 3.161 1.271.916-.093 1.875-.14 2.833-.14s1.917.047 2.833.14c1.167-1.271 2.104-1.271 3.161-1.271h.005c.5 0 2.5 0 3.891 3.912l1.495 5.369c1.109 3.995-.355 4.095-2.177 4.095-2.708-.1-4.208-2.068-4.208-4.037-1.5.251-3.251.371-5 .371s-3.5-.12-4.995-.371c0 1.969-1.5 3.937-4.208 4.037-1.828-.005-3.292-.1-2.183-4.095l1.495-5.369c1.396-3.912 3.396-3.912 3.896-3.912zM16 16.953c-.005 0-2.849 2.62-3.364 3.547l1.864-.073v1.625c0 .079.751.047 1.5.011.749.036 1.495.068 1.495-.011v-1.625l1.869.073C18.849 19.573 16 16.953 16 16.953"/>
    </svg>`,

    googlePlay: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m22.018 13.298-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594M1.337.924a1.5 1.5 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087zm12.207 10.065 3.258-3.238L3.45.195a1.47 1.47 0 0 0-.946-.179zm0 2.067-11 10.933c.298.036.612-.016.906-.183l13.324-7.54z"/>
    </svg>`,

    youtube: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78 78 0 0 0 12 4.27a79 79 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48 48 0 0 0 0 6.48 9.6 9.6 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45 45 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.9 2.9 0 0 0 1.53-.78 2.5 2.5 0 0 0 .61-1 10.6 10.6 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54M9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08"/>
    </svg>`,

    steam: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658a3.4 3.4 0 0 1 1.912-.59q.094.001.188.006l2.861-4.142V8.91a4.53 4.53 0 0 1 4.524-4.524c2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911.004.159a3.39 3.39 0 0 1-3.39 3.396 3.41 3.41 0 0 1-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0M7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.551 2.551 0 0 0 3.337-3.324 2.547 2.547 0 0 0-3.255-1.413l1.523.63a1.878 1.878 0 0 1-1.445 3.467zm11.415-9.303a3.02 3.02 0 0 0-3.015-3.015 3.015 3.015 0 1 0 3.015 3.015m-5.273-.005a2.264 2.264 0 1 1 4.531 0 2.267 2.267 0 0 1-2.266 2.265 2.264 2.264 0 0 1-2.265-2.265"/>
    </svg>`,

    html5: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" aria-label="HTML5" viewBox="0 0 512 512">
      <path fill="#e34f26" d="M71 460 30 0h451l-41 460-185 52"/>
      <path fill="#ef652a" d="m256 472 149-41 35-394H256"/>
      <path fill="#ebebeb" d="M256 208h-75l-5-58h80V94H114l15 171h127zm-1 147-63-17-4-45h-56l7 89 116 32z"/>
      <path fill="#fff" d="M255 208v57h70l-7 73-63 17v59l116-32 16-174zm0-114v56h137l5-56z"/>
    </svg>`,

    android: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 413.137 413.137" xml:space="preserve">
      <path fill="#aac148" d="M311.358 136.395H101.779a8.44 8.44 0 0 0-8.441 8.441v175.749a8.44 8.44 0 0 0 8.441 8.441h37.363v59.228c0 13.742 11.14 24.883 24.883 24.883s24.883-11.14 24.883-24.883v-59.228h34.803v59.228c0 13.742 11.14 24.883 24.883 24.883s24.883-11.14 24.883-24.883v-59.228h37.882a8.44 8.44 0 0 0 8.441-8.441V144.836a8.44 8.44 0 0 0-8.442-8.441m-253.502-.041c-13.742 0-24.883 11.14-24.883 24.883v101.065c0 13.742 11.14 24.883 24.883 24.883s24.883-11.14 24.883-24.883V161.237c-.001-13.742-11.141-24.883-24.883-24.883m297.425 0c-13.742 0-24.883 11.14-24.883 24.883v101.065c0 13.742 11.14 24.883 24.883 24.883s24.883-11.14 24.883-24.883V161.237c0-13.742-11.14-24.883-24.883-24.883m-251.806-12.285h205.692c5.366 0 9.368-4.943 8.266-10.195-6.804-32.428-27.45-59.756-55.465-75.543l17.584-31.727a4.447 4.447 0 0 0-7.78-4.311l-17.717 31.966c-14.511-6.734-30.683-10.495-47.734-10.495s-33.224 3.761-47.735 10.495L140.869 2.292a4.447 4.447 0 0 0-7.779 4.311l17.584 31.727c-28.015 15.788-48.661 43.115-55.465 75.544-1.103 5.252 2.899 10.195 8.266 10.195m164.222-47.283c0 5.282-4.282 9.565-9.565 9.565s-9.565-4.282-9.565-9.565 4.282-9.565 9.565-9.565 9.565 4.283 9.565 9.565m-113.189-9.565c5.282 0 9.565 4.282 9.565 9.565s-4.282 9.565-9.565 9.565-9.565-4.282-9.565-9.565 4.282-9.565 9.565-9.565"/>
    </svg>`,

    expand: `<svg width="64" height="64" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit">
      <path d="M2 15.758V2h14.299l5.262 4h-8.769L22 15.758 16.299 21 7 12.251v8.769zM33.752 2H48v13.809l-4 5.261v-8.768L33.997 21.51l-5.364-5.456L37.259 7H28.49zM48 33.752V48H33.701l-5.262-4h8.769L28 33.997l5.701-5.364L43 37.259V28.49zM16.248 48H2V33.701l4-5.262v8.769L16.003 28l5.364 5.701L12.741 43h8.769z"/>
    </svg>`,

    compress: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.707 17.293a1 1 0 1 1-1.414 1.414L13 17.414V22a1 1 0 0 1-2 0v-4.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.416 0ZM12 1a1 1 0 0 0-1 1v4.586L9.707 5.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.416 0l3-3a1 1 0 1 0-1.414-1.414L13 6.586V2a1 1 0 0 0-1-1M9.706 11.292l-3-3a1 1 0 0 0-1.413 1.415L6.586 11H2a1 1 0 0 0 0 2h4.586l-1.293 1.293a1 1 0 1 0 1.414 1.414l3-3a1 1 0 0 0-.001-1.415M22 11h-4.586l1.293-1.293a1 1 0 0 0-1.414-1.414l-3 3a1 1 0 0 0 0 1.416l3 3a1 1 0 0 0 1.414-1.414L17.414 13H22a1 1 0 0 0 0-2"/>
    </svg>`,

    search: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="rotate(-90)">
      <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5"/>
    </svg>`,

    action: `<svg width="64" height="64" viewBox="0 0 14 14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="m11.324 3.075-1.219 1.22.622.62a.56.56 0 0 1 0 .795l-.408.408a4.874 4.874 0 0 1-4.444 6.881 4.874 4.874 0 1 1 2.006-9.316l.408-.408a.56.56 0 0 1 .795 0l.62.62 1.22-1.218zm1.395-.668h-.563a.28.28 0 0 0-.281.282c0 .154.127.28.281.28h.563A.28.28 0 0 0 13 2.69a.28.28 0 0 0-.281-.282m-1.406-1.406a.28.28 0 0 0-.282.281v.563c0 .155.127.281.281.281a.28.28 0 0 0 .282-.281v-.563a.28.28 0 0 0-.281-.28m.794 1.29.398-.4a.282.282 0 1 0-.398-.398l-.398.399a.282.282 0 1 0 .398.398m-1.589 0a.282.282 0 1 0 .398-.4l-.398-.398a.281.281 0 1 0-.398.399zm1.589.796a.281.281 0 1 0-.398.399l.398.398a.282.282 0 1 0 .398-.398zm-8.482 4.29c0-.828.673-1.5 1.5-1.5A.376.376 0 0 0 5.5 5.5a.376.376 0 0 0-.375-.375c-1.24 0-2.25 1.01-2.25 2.25 0 .206.169.375.375.375a.376.376 0 0 0 .375-.375"/>
    </svg>`,

    platformer: `<svg width="64" height="64" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path d="m31.42 9.09-13-6a1 1 0 0 0-.84 0l-13 6A1 1 0 0 0 4 10v17a1 1 0 0 0 .58.91l13 6a1 1 0 0 0 .84 0l13-6A1 1 0 0 0 32 27V10a1 1 0 0 0-.58-.91M18 14.9 7.39 10 18 5.1 28.61 10Zm12 11.46-11 5.08v-14.8l11-5.08Z" class="clr-i-solid clr-i-solid-path-1"/>
      <path fill="none" d="M0 0h36v36H0z"/>
    </svg>`,

    word: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 2h14v1H1zm13 2h-1v8h1zm-2.728 4.387a2.4 2.4 0 0 0-.36-.786 1.75 1.75 0 0 0-.609-.53 1.8 1.8 0 0 0-.866-.193q-.297 0-.547.073a1.8 1.8 0 0 0-.453.205 1.7 1.7 0 0 0-.365.318l-.179.258V4.578H7V12h.893v-.575l.126.175q.131.152.304.269.175.117.398.186t.498.068q.53 0 .937-.212.408-.214.682-.586.274-.375.414-.879.14-.506.14-1.097a3.8 3.8 0 0 0-.12-.962M9.793 7.78q.227.107.39.314.163.21.255.517.078.262.089.587l-.007.125c0 .327-.033.62-.1.869a1.9 1.9 0 0 1-.278.614q-.178.244-.421.366c-.322.162-.76.166-1.069.015a1.3 1.3 0 0 1-.393-.296 1.3 1.3 0 0 1-.218-.367s-.179-.447-.179-.947.179-1.002.179-1.002q.092-.264.224-.43.172-.215.424-.345.253-.129.587-.129.286 0 .517.109M15 13H1v1h14zM2.813 10l-.728 2.031H1l.025-.072 2.441-7.086h.941l2.485 7.158H5.81L5.032 10zm1.121-3.578h-.022l-.905 2.753h1.841z"/>
    </svg>`,

    heart: `<svg width="64" height="64" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.91 6.75c-1.17 2.25-4.3 5.31-6.07 6.94a.5.5 0 0 1-.67 0C5.39 12.06 2.26 9 1.09 6.75-1.48 1.8 5-1.5 7.5 3.45c2.5-4.95 8.98-1.65 6.41 3.3"/>
    </svg>`,

    adventure: `<svg width="64" height="64" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.219 1.943c.653.512 1.103 1.339 1.287 2.205l.065.026 2.045.946a.66.66 0 0 1 .384.597v12.367a.665.665 0 0 1-.85.634l-5.669-1.6-6.74 1.858a.67.67 0 0 1-.371-.004L.474 17.217a.66.66 0 0 1-.474-.63V3.998c0-.44.428-.756.855-.632l5.702 1.661 2.898-.887q.06-.018.122-.025c.112-.656.425-1.286.95-1.9.623-.73 1.716-1.158 2.781-1.209 1.105-.053 1.949.183 2.91.936M1.333 4.881v11.215l4.87 1.449V6.298zm8.209.614-2.006.613v11.279l5.065-1.394v-3.295c0-.364.299-.659.667-.659s.666.295.666.66v3.177l4.733 1.335V6.136l-1.12-.52q-.028.165-.073.323A6.1 6.1 0 0 1 16.4 8.05l-2.477 3.093a.67.67 0 0 1-1.073-.037l-2.315-3.353q-.574-.799-.801-1.436a3.7 3.7 0 0 1-.192-.822m3.83-3.171c-.726.035-1.472.327-1.827.742-.427.5-.637.968-.679 1.442-.05.571-.016.974.126 1.373.105.295.314.669.637 1.12l1.811 2.622 1.91-2.385a4.8 4.8 0 0 0 .841-1.657c.24-.84-.122-2.074-.8-2.604-.695-.545-1.22-.692-2.018-.653m.138.697c1.104 0 2 .885 2 1.977a1.99 1.99 0 0 1-2 1.977c-1.104 0-2-.885-2-1.977s.896-1.977 2-1.977m0 1.318a.663.663 0 0 0-.667.659c0 .364.299.659.667.659a.663.663 0 0 0 .666-.66.663.663 0 0 0-.666-.658"/>
    </svg>`,

    puzzle: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" xml:space="preserve">
      <path d="M25 19c-1.7 0-3-1.3-3-3s1.3-3 3-3h1V8h-6V7c0-1.7-1.3-3-3-3s-3 1.3-3 3v1H8v5H7c-1.7 0-3 1.3-3 3s1.3 3 3 3h1v5h6v1c0 1.7 1.3 3 3 3s3-1.3 3-3v-1h6v-5z"/>
    </svg>`,

    confirm: `<svg width="64" height="64" viewBox="0 0 14 14" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4.197q0 .31-.217.527l-5.605 5.605-1.053 1.053q-.217.217-.526.217t-.527-.217L4.02 10.329 1.217 7.526Q1 7.31 1 7t.217-.527L2.27 5.422q.216-.217.526-.217t.527.217l2.276 2.284 5.078-5.087q.217-.217.527-.217t.526.217l1.053 1.053q.217.217.217.526"/>
    </svg>`,

    cancel: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M3 8a5 5 0 0 0 7.757 4.172l-6.929-6.93A5 5 0 0 0 3 8m5-5c-1.02 0-1.967.305-2.757.828l6.929 6.93A5 5 0 0 0 8 3"/>
    </svg>`,

    arrow: `<svg width="64" height="64" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/>
    </svg>`,
  }

  public getSvg(name: string): string {
    return this.icons[name] || ''
  }
}