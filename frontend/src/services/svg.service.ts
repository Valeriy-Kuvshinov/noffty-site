interface IconDictionary {
  [key: string]: string
}

export class SvgService {
  private icons: IconDictionary = {
    globe: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8m5.2 5.3c.4 0 .7.3 1.1.3-.3.4-1.6.4-2-.1.3-.1.5-.2.9-.2M1 8c0-.4 0-.8.1-1.3.1 0 .2.1.3.1 0 0 .1.1.1.2 0 .3.3.5.5.5.8.1 1.1.8 1.8 1 .2.1.1.3 0 .5-.6.8-.1 1.4.4 1.9.5.4.5.8.6 1.4 0 .7.1 1.5.4 2.2C2.7 13.3 1 10.9 1 8m7 7c-.7 0-1.5-.1-2.1-.3q-.15-.3 0-.6c.4-.8.8-1.5 1.3-2.2.2-.2.4-.4.4-.7 0-.2.1-.5.2-.7.3-.5.2-.8-.2-.9-.8-.2-1.2-.9-1.8-1.2s-1.2-.5-1.7-.2c-.2.1-.5.2-.5-.1 0-.4-.5-.7-.4-1.1-.1 0-.2 0-.3.1s-.2.2-.4.1c-.2-.2-.1-.4-.1-.6.1-.2.2-.3.4-.4.4-.1.8-.1 1 .4.3-.9.9-1.4 1.5-1.8 0 0 .8-.7.9-.7s.2.2.4.3c.2 0 .3 0 .3-.2.1-.5-.2-1.1-.6-1.2 0-.1.1-.1.1-.1.3-.1.7-.3.6-.6 0-.4-.4-.6-.8-.6-.2 0-.4 0-.6.1-.4.2-.9.4-1.5.4C5.2 1.4 6.6 1 8 1h.8c-.6.1-1.2.3-1.6.5.6.1.7.4.5.9-.1.2 0 .4.2.5s.4.1.5-.1c.2-.3.6-.4.9-.5.4-.1.7-.3 1-.7 0-.1.1-.1.2-.2.6.2 1.2.6 1.8 1-.1 0-.1.1-.2.1-.2.2-.5.3-.2.7.1.2 0 .3-.1.4-.2.1-.3 0-.4-.1s-.1-.3-.4-.3c-.1.2-.4.3-.4.6.5 0 .4.4.5.7-.6.1-.8.4-.5.9.1.2-.1.3-.2.4-.4.6-.8 1-.8 1.7s.5 1.4 1.3 1.3c.9-.1.9-.1 1.2.7 0 .1.1.2.1.3.1.2.2.4.1.6-.3.8.1 1.4.4 2 .1.2.2.3.3.4-1.3 1.4-3 2.2-5 2.2"/>
    </svg>`,

    home: `<svg width="64" height="64" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path class="clr-i-solid clr-i-solid-path-1" d="M33 19a1 1 0 0 1-.71-.29L18 4.41 3.71 18.71A1 1 0 0 1 2.3 17.3l15-15a1 1 0 0 1 1.41 0l15 15A1 1 0 0 1 33 19"/>
      <path class="clr-i-solid clr-i-solid-path-2" d="M18 7.79 6 19.83V32a2 2 0 0 0 2 2h7V24h6v10h7a2 2 0 0 0 2-2V19.76Z"/>
      <path fill="none" d="M0 0h36v36H0z"/>
    </svg>`,

    back: `<svg width="64" height="64" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.06 2.06 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.06 2.06 0 0 0-2.845 0"/>
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

    steam: `<svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.57 20.027C4.3 25.797 9.654 30 15.99 30 23.728 30 30 23.732 30 16S23.727 2 15.99 2C8.567 2 2.493 7.772 2.013 15.07c0 2.097 0 2.972.558 4.957" fill="url(#a)"/>
      <path d="m15.27 12.563-3.427 4.977a3.9 3.9 0 0 0-2.297.635l-7.528-3.097s-.174 2.864.552 4.998l5.321 2.195a3.88 3.88 0 0 0 2.295 2.743 3.887 3.887 0 0 0 5.38-3.691l5.024-3.501a5.33 5.33 0 0 0 5.321-5.328 5.33 5.33 0 0 0-5.32-5.327c-2.836 0-5.48 2.474-5.32 5.396m-.823 10.015a3 3 0 0 1-3.92 1.617 2.98 2.98 0 0 1-1.542-1.471l1.732.717a2.208 2.208 0 0 0 1.697-4.077l-1.79-.742a2.98 2.98 0 0 1 2.21.034c.74.308 1.314.887 1.618 1.627s.303 1.557-.005 2.295m6.143-6.535a3.55 3.55 0 0 1-3.544-3.55 3.55 3.55 0 0 1 3.544-3.548 3.55 3.55 0 0 1 3.547 3.549 3.553 3.553 0 0 1-3.547 3.55m-2.656-3.555a2.665 2.665 0 0 1 2.662-2.666 2.666 2.666 0 0 1 0 5.332 2.664 2.664 0 0 1-2.662-2.666" fill="#fff"/>
      <defs>
        <linearGradient id="a" x1="16.006" y1="2" x2="16.006" y2="30" gradientUnits="userSpaceOnUse">
          <stop stop-color="#111D2E"/>
          <stop offset=".212" stop-color="#051839"/>
          <stop offset=".407" stop-color="#0A1B48"/>
          <stop offset=".581" stop-color="#132E62"/>
          <stop offset=".738" stop-color="#144B7E"/>
          <stop offset=".873" stop-color="#136497"/>
          <stop offset="1" stop-color="#1387B8"/>
        </linearGradient>
      </defs>
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

    platformer: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 570.152 570.152" xml:space="preserve" transform="scale(-1 1)">
      <circle cx="228.625" cy="61.794" r="61.794"/>
      <path d="m206.608 157.679-64.284 50.006-86.696-74.483-29.854 34.749 115.023 98.82 86.42-66.813 63.18 129.595-88.501 65.451-8.532 172.125 61.005 3.023 7.096-143.236 72.282-53.453 4.484-3.151 18.571 110.768 182.955 13.887 4.621-60.906-135.246-10.264-15.014-92.815-61.555-170.108h89.252l53.633 121.307 41.897-18.522-65.692-148.597H315.987z"/>
    </svg>`,

    dice: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 512 512">
      <path d="M488.1 101.2 263.5 12.4c-4.8-1.9-10.2-1.9-15 0L23.9 101.2c-.1 0-12.4 4.3-12.9 19v287.2c0 8.8 5.7 16.7 14.1 19.4L249.7 500c.3.1 3 1 6.3 1 3.5 0 6-.9 6.3-1l224.6-73.2c8.4-2.7 14.1-10.6 14.1-19.4V120.2c-.7-14.7-12.8-19-12.9-19M235.6 452.5 51.8 392.6V148.3l183.8 59.9zM256 171.9 91.6 118.3l164.4-65 164.4 65zm204.2 220.7-183.7 59.9V208.2L460 148.4h.1v244.2z"/>
      <path d="M258.6 102.6h-6.9c-12.4 0-22.4 10-22.4 22.4s10 22.4 22.4 22.4h6.9c12.4 0 22.4-10 22.4-22.4s-10-22.4-22.4-22.4m73.3 190c-14.3 0-25.8 11.6-25.8 25.8 0 14.3 11.6 25.8 25.8 25.8 14.3 0 25.8-11.6 25.8-25.8.1-14.3-11.5-25.8-25.8-25.8m72.8-36.1c-14.3 0-25.8 11.6-25.8 25.8 0 14.3 11.6 25.8 25.8 25.8 14.3 0 25.8-11.6 25.8-25.8s-11.6-25.8-25.8-25.8m-238.2 27c14.3 0 25.8-11.6 25.8-25.8 0-14.3-11.6-25.8-25.8-25.8-14.3 0-25.8 11.6-25.8 25.8 0 14.3 11.5 25.8 25.8 25.8m-61.9 59.2c14.3 0 25.8-11.6 25.8-25.8 0-14.3-11.6-25.8-25.8-25.8-14.3 0-25.8 11.6-25.8 25.8s11.6 25.8 25.8 25.8m78.2-25.5c-14.3 0-25.8 11.6-25.8 25.8 0 14.3 11.6 25.8 25.8 25.8 14.3 0 25.8-11.6 25.8-25.8s-11.5-25.8-25.8-25.8"/>
    </svg>`,

    questionMark: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 11H6c0-3 1.6-4 2.7-4.6q.6-.3.9-.6c.5-.5.3-1.2.2-1.4-.3-.7-1-1.4-2.3-1.4C5.4 3 5 4.9 5 5.3l-3-.4C2.2 3.2 3.7 0 7.5 0c2.3 0 4.3 1.3 5.1 3.2.7 1.7.4 3.5-.8 4.7-.5.5-1.1.8-1.6 1.1-.9.5-1.2 1-1.2 2m.5 3a2 2 0 1 1-3.999.001A2 2 0 0 1 9.5 14"/>
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

    confirm: `<svg width="64" height="64" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 4.197q0 .31-.217.527l-5.605 5.605-1.053 1.053q-.217.217-.526.217t-.527-.217L4.02 10.329 1.217 7.526Q1 7.31 1 7t.217-.527L2.27 5.422q.216-.217.526-.217t.527.217l2.276 2.284 5.078-5.087q.217-.217.527-.217t.526.217l1.053 1.053q.217.217.217.526"/>
    </svg>`,

    cancel: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1a7 7 0 1 1 0 14A7 7 0 0 1 8 1M3 8a5 5 0 0 0 7.757 4.172l-6.929-6.93A5 5 0 0 0 3 8m5-5c-1.02 0-1.967.305-2.757.828l6.929 6.93A5 5 0 0 0 8 3"/>
    </svg>`,

    arrow: `<svg width="64" height="64" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
      <path d="M8.293 2.293a1 1 0 0 1 1.414 0l4.5 4.5a1 1 0 0 1 0 1.414l-4.5 4.5a1 1 0 0 1-1.414-1.414L11 8.5H1.5a1 1 0 0 1 0-2H11L8.293 3.707a1 1 0 0 1 0-1.414"/>
    </svg>`,

    menu: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2"/>
    </svg>`,

    controller: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 32 32" xml:space="preserve">
      <path d="M30.838 18.634h.002l-2.107-9.173C28.081 7.458 26.221 6 24 6c-1.63 0-3.065.792-3.977 2h-8.045C11.065 6.792 9.63 6 8 6 5.779 6 3.919 7.458 3.267 9.461L1.16 18.633h.002C1.06 19.073 1 19.529 1 20a5.996 5.996 0 0 0 11.651 2h6.698A5.997 5.997 0 0 0 31 20c0-.471-.06-.927-.162-1.366M10 16H9v1a1 1 0 1 1-2 0v-1H6a1 1 0 1 1 0-2h1v-1a1 1 0 1 1 2 0v1h1a1 1 0 1 1 0 2m13 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m3 3a1 1 0 1 1 0-2 1 1 0 0 1 0 2m0-3a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
    </svg>`,

    info: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 52 52" xml:space="preserve">
      <path d="M26 2C12.7 2 2 12.7 2 26s10.7 24 24 24 24-10.7 24-24S39.3 2 26 2m0 12.1c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3m5 21c0 .5-.4.9-1 .9h-8c-.5 0-1-.3-1-.9v-2c0-.5.4-1.1 1-1.1.5 0 1-.3 1-.9v-4c0-.5-.4-1.1-1-1.1-.5 0-1-.3-1-.9v-2c0-.5.4-1.1 1-1.1h6c.5 0 1 .5 1 1.1v8c0 .5.4.9 1 .9.5 0 1 .5 1 1.1z"/>
    </svg>`,

    mail: `<svg width="64" height="64" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
      <path d="M64 128q0-15 9-23 8-9 23-9h320q15 0 24 9 8 8 8 23v16L256 272 64 144zm192 200 192-128v184q0 32-32 32H96q-32 0-32-32V200z"/>
    </svg>`,

    person: `<svg height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
      <path d="M458.159 404.216c-18.93-33.65-49.934-71.764-100.409-93.431-28.868 20.196-63.938 32.087-101.745 32.087-37.828 0-72.898-11.89-101.767-32.087-50.474 21.667-81.479 59.782-100.398 93.431C28.731 448.848 48.417 512 91.842 512h328.317c43.424 0 63.11-63.152 38-107.784zM256.005 300.641c74.144 0 134.231-60.108 134.231-134.242v-32.158C390.236 60.108 330.149 0 256.005 0 181.85 0 121.753 60.108 121.753 134.242V166.4c0 74.133 60.098 134.241 134.252 134.241z"/>
    </svg>`,

    title: `<svg height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
      <path d="M46.5 0v139.6h23.3c0-23.3 0-69.8 23.3-93.1 23.2-23.3 46.5-23.3 69.8-23.3h46.5v395.6c0 34.9-11.6 69.8-46.5 69.8h-22.8l-.5 23.2h232.7v-23.3H349c-34.9 0-46.5-34.9-46.5-69.8V23.3H349c23.3 0 46.5 0 69.8 23.3s23.3 69.8 23.3 93.1h23.3V0H46.5z"/>
    </svg>`,

    message: `<svg width="64" height="64" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 0c5.342 0 10 4.41 10 9.5 0 5.004-4.553 8.942-10 8.942a11 11 0 0 1-3.43-.546c-.464.45-.623.603-1.608 1.553-.71.536-1.378.718-1.975.38-.602-.34-.783-1.002-.66-1.874l.4-2.319C.99 14.002 0 11.842 0 9.5 0 4.41 4.657 0 10 0m0 1.4c-4.586 0-8.6 3.8-8.6 8.1 0 2.045.912 3.928 2.52 5.33l.02.017.297.258-.067.39-.138.804-.037.214-.285 1.658a3 3 0 0 0-.03.337v.095q0 .007-.002.008c.007-.01.143-.053.376-.223l2.17-2.106.414.156a9.6 9.6 0 0 0 3.362.605c4.716 0 8.6-3.36 8.6-7.543 0-4.299-4.014-8.1-8.6-8.1M5.227 7.813a1.5 1.5 0 1 1 0 2.998 1.5 1.5 0 0 1 0-2.998m4.998 0a1.5 1.5 0 1 1 0 2.998 1.5 1.5 0 0 1 0-2.998m4.997 0a1.5 1.5 0 1 1 0 2.998 1.5 1.5 0 0 1 0-2.998"/>
    </svg>`,

    crown: `<svg width="64" height="64" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 3">
        <path d="M2.6 11.93a1.4 1.4 0 1 0 1.4 1.4 1.4 1.4 0 0 0-1.4-1.4"/>
        <circle cx="33.83" cy="13.33" r="1.39"/>
        <path d="M18.22 6.39A1.39 1.39 0 1 0 16.84 5a1.39 1.39 0 0 0 1.38 1.39m13.41 9.71A18.6 18.6 0 0 0 28 17.34a21.6 21.6 0 0 0-4 2.49 19.2 19.2 0 0 1-2.26-3.49 49 49 0 0 1-2.52-6.58 1 1 0 0 0-1-.71 1 1 0 0 0-1 .71 48.4 48.4 0 0 1-2.52 6.58 18.7 18.7 0 0 1-2.26 3.48 22.8 22.8 0 0 0-4-2.48A19 19 0 0 0 4.9 16.1a1 1 0 0 0-1 .33 1 1 0 0 0-.13 1.07 56 56 0 0 1 4 13.5 1 1 0 0 0 1 .83h19a1 1 0 0 0 1-.83 56 56 0 0 1 4-13.5 1 1 0 0 0-.13-1.07 1 1 0 0 0-1.01-.33M11.08 28.55a1.11 1.11 0 1 1 1.1-1.11 1.11 1.11 0 0 1-1.1 1.11m7.15 0a1.11 1.11 0 0 1 0-2.21 1.11 1.11 0 0 1 0 2.21m7.16 0a1.11 1.11 0 1 1 1.1-1.11 1.11 1.11 0 0 1-1.1 1.11"/>
      </g>
    </svg>`,

    linkedin: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1">
      <path d="M20.47 2H3.53a1.45 1.45 0 0 0-1.47 1.43v17.14A1.45 1.45 0 0 0 3.53 22h16.94a1.45 1.45 0 0 0 1.47-1.43V3.43A1.45 1.45 0 0 0 20.47 2M8.09 18.74h-3v-9h3ZM6.59 8.48a1.56 1.56 0 1 1 0-3.12 1.57 1.57 0 1 1 0 3.12m12.32 10.26h-3v-4.83c0-1.21-.43-2-1.52-2A1.65 1.65 0 0 0 12.85 13a2 2 0 0 0-.1.73v5h-3v-9h3V11a3 3 0 0 1 2.71-1.5c2 0 3.45 1.29 3.45 4.06Z"/>
    </svg>`,

    soundcloud: `<svg height="64" width="64" xmlns="http://www.w3.org/2000/svg" viewBox="-271 345.8 256 111.2" xml:space="preserve">
      <path d="M-238.4 398.1c-.8 0-1.4.6-1.5 1.5l-2.3 28 2.3 27.1c.1.8.7 1.5 1.5 1.5s1.4-.6 1.5-1.5l2.6-27.1-2.6-28c-.1-.9-.8-1.5-1.5-1.5m10.2 1.8c-.9 0-1.7.7-1.7 1.7l-2.1 26 2.1 27.3c.1 1 .8 1.7 1.7 1.7s1.6-.7 1.7-1.7l2.4-27.3-2.4-26c-.1-1-.8-1.7-1.7-1.7m-30.4 3.6c-.5 0-1 .4-1.1 1l-2.5 23 2.5 22.5c.1.6.5 1 1.1 1 .5 0 1-.4 1.1-1l2.9-22.5-2.9-23c-.2-.5-.6-1-1.1-1m-9.5 8.8c-.5 0-1 .4-1 1l-1.9 14.3 1.9 14c.1.6.5 1 1 1s.9-.4 1-1l2.2-14-2.2-14.2c-.1-.6-.5-1.1-1-1.1m60.6-38.8c-1.2 0-2.1.9-2.2 2.1l-1.9 52 1.9 27.2c.1 1.2 1 2.1 2.2 2.1s2.1-.9 2.2-2.1l2.1-27.2-2.1-52c-.1-1.2-1.1-2.1-2.2-2.1m-41.1 25.5c-.7 0-1.2.5-1.3 1.3l-2.4 27.3 2.4 26.3c.1.7.6 1.3 1.3 1.3s1.2-.5 1.3-1.2l2.7-26.3-2.7-27.3c-.1-.8-.6-1.4-1.3-1.4m30.7-15.6c-1 0-1.9.8-1.9 1.9l-2 42.3 2 27.3c.1 1.1.9 1.9 1.9 1.9s1.9-.8 1.9-1.9l2.3-27.3-2.3-42.3c0-1.1-.9-1.9-1.9-1.9m63.5-24.1c-1.8 0-3.2 1.4-3.2 3.2l-1.2 65 1.2 26.1c0 1.8 1.5 3.2 3.2 3.2 1.8 0 3.2-1.5 3.2-3.2l1.4-26.1-1.4-65c.1-1.7-1.4-3.2-3.2-3.2m-42.7 9.6c-1.3 0-2.3 1-2.4 2.4l-1.8 56.3 1.8 26.9c0 1.3 1.1 2.3 2.4 2.3s2.3-1 2.4-2.4l2-26.9-2-56.3c0-1.2-1.1-2.3-2.4-2.3M-46.5 394c-4.3 0-8.4.9-12.2 2.4-2.5-28.4-26.3-50.6-55.3-50.6-7.1 0-14 1.4-20.1 3.8-2.4.9-3 1.9-3 3.7v99.9c0 1.9 1.5 3.5 3.4 3.7h87.3c17.4 0 31.5-14.1 31.5-31.5-.1-17.3-14.2-31.4-31.6-31.4m-97.1-40.8c-1.9 0-3.4 1.6-3.5 3.5l-1.4 70.9 1.4 25.7c0 1.9 1.6 3.4 3.5 3.4s3.4-1.6 3.5-3.5l1.5-25.8-1.5-70.9c-.1-1.7-1.6-3.3-3.5-3.3m-42.9 13.6c-1.4 0-2.5 1.1-2.6 2.6l-1.6 58.2 1.6 26.7c0 1.4 1.2 2.6 2.6 2.6s2.5-1.1 2.6-2.6l1.8-26.7-1.8-58.2c-.1-1.5-1.2-2.6-2.6-2.6m10.6 1.3c-1.5 0-2.8 1.2-2.8 2.8l-1.5 56.7 1.5 26.5c0 1.6 1.3 2.8 2.8 2.8s2.8-1.2 2.8-2.8l1.7-26.5-1.7-56.7c0-1.6-1.2-2.8-2.8-2.8m10.7 1.8c-1.7 0-3 1.3-3 3l-1.4 54.7 1.4 26.3c0 1.7 1.4 3 3 3 1.7 0 3-1.3 3-3l1.5-26.3-1.5-54.7c0-1.6-1.3-3-3-3"/>
    </svg>`,

    instagram: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.825 2h2.349c1.675.004 2.06.019 2.949.06 1.064.048 1.791.217 2.427.464a4.9 4.9 0 0 1 1.772 1.153 4.9 4.9 0 0 1 1.153 1.772c.247.636.416 1.363.465 2.427.047 1.031.06 1.384.06 3.86v.527c0 2.476-.013 2.829-.06 3.86-.049 1.064-.218 1.791-.465 2.427a4.9 4.9 0 0 1-1.153 1.772 4.9 4.9 0 0 1-1.772 1.153c-.636.247-1.363.416-2.427.465-1.031.047-1.384.06-3.86.06h-.527c-2.476 0-2.829-.013-3.86-.06-1.064-.049-1.791-.218-2.427-.465a4.9 4.9 0 0 1-1.772-1.153 4.9 4.9 0 0 1-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.04-.89-.055-1.274-.059-2.95v-2.348c.004-1.675.019-2.06.06-2.949.048-1.064.217-1.791.464-2.427a4.9 4.9 0 0 1 1.153-1.772A4.9 4.9 0 0 1 5.45 2.524c.636-.247 1.363-.416 2.427-.465.89-.04 1.274-.055 2.95-.059h2.348zm1.908 1.801h-1.467c-2.007.002-2.359.015-3.308.058-.975.045-1.504.208-1.857.344-.466.182-.8.399-1.15.749s-.566.683-.748 1.15c-.136.352-.3.881-.344 1.856-.043.95-.056 1.3-.058 3.308v1.467c.002 2.007.015 2.358.058 3.308.045.975.208 1.504.344 1.857.182.466.399.8.749 1.15s.683.566 1.15.747c.352.137.881.3 1.856.345 1.055.048 1.371.058 4.042.058s2.986-.01 4.04-.058c.976-.045 1.505-.208 1.858-.345.466-.18.8-.398 1.15-.748s.566-.683.747-1.15c.137-.352.3-.881.345-1.856.048-1.055.058-1.371.058-4.041s-.01-2.987-.058-4.042c-.045-.975-.208-1.504-.345-1.857a3.1 3.1 0 0 0-.748-1.15 3.1 3.1 0 0 0-1.15-.748c-.352-.136-.881-.3-1.856-.344-.95-.043-1.3-.056-3.308-.058M11.999 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 1.755a3.246 3.246 0 1 0 0 6.491 3.246 3.246 0 0 0 0-6.491m5.417-3.422a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"/>
    </svg>`,

    edit: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.436 1.005A1.75 1.75 0 0 1 13.902.79l.702.589a1.75 1.75 0 0 1 .216 2.465l-5.704 6.798a4.75 4.75 0 0 1-1.497 1.187l-2.572 1.299a.75.75 0 0 1-1.056-.886l.833-2.759a4.75 4.75 0 0 1 .908-1.68zm1.502.934a.25.25 0 0 0-.353.03l-.53.633 1.082.914.534-.636a.25.25 0 0 0-.031-.352zm-.765 2.726-1.082-.914-4.21 5.016a3.25 3.25 0 0 0-.621 1.15L5.933 11l1.01-.51a3.25 3.25 0 0 0 1.024-.812z"/>
      <path d="M3.25 3.5a.75.75 0 0 0-.75.75v9.5c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V9A.75.75 0 0 1 15 9v4.75A2.25 2.25 0 0 1 12.75 16h-9.5A2.25 2.25 0 0 1 1 13.75v-9.5A2.25 2.25 0 0 1 3.25 2H6a.75.75 0 0 1 0 1.5z"/>
    </svg>`,

    return: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 206.108 206.108" xml:space="preserve">
      <path d="M152.774 69.886H30.728l24.97-24.97a9 9 0 0 0 0-12.728 9 9 0 0 0-12.729 0L2.636 72.523a9 9 0 0 0 0 12.728l40.333 40.333a8.97 8.97 0 0 0 6.364 2.636 9 9 0 0 0 6.364-15.364l-24.97-24.97h122.046c19.483 0 35.334 15.851 35.334 35.334s-15.851 35.334-35.334 35.334H78.531c-4.971 0-9 4.029-9 9s4.029 9 9 9h74.242c29.408 0 53.334-23.926 53.334-53.334s-23.925-53.334-53.333-53.334"/>
    </svg>`,

    plus: `<svg width="64" height="64" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <path d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512 282.784 0 512-229.216 512-512C1024 229.232 794.784 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01 0-247.024 200.976-448 448-448s448 200.977 448 448-200.976 449.01-448 449.01zM736 480H544V288c0-17.664-14.336-32-32-32s-32 14.336-32 32v192H288c-17.664 0-32 14.336-32 32s14.336 32 32 32h192v192c0 17.664 14.336 32 32 32s32-14.336 32-32V544h192c17.664 0 32-14.336 32-32s-14.336-32-32-32z"/>
    </svg>`,

    minus: `<svg width="64" height="64" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
      <path class="clr-i-solid clr-i-solid-path-1" d="M18 2a16 16 0 1 0 16 16A16 16 0 0 0 18 2Zm8 22.1a1.4 1.4 0 0 1-2 2l-6-6-6 6.02a1.4 1.4 0 1 1-2-2l6-6.04-6.17-6.22a1.4 1.4 0 1 1 2-2L18 16.1l6.17-6.17a1.4 1.4 0 1 1 2 2L20 18.08Z"/>
      <path fill="none" d="M0 0h36v36H0z"/>
    </svg>`,

    images: `<svg width="64" height="64" viewBox="0 -32 576 576" xmlns="http://www.w3.org/2000/svg">
      <path d="M480 416v16c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V176c0-26.51 21.49-48 48-48h16v208c0 44.112 35.888 80 80 80zm96-80V80c0-26.51-21.49-48-48-48H144c-26.51 0-48 21.49-48 48v256c0 26.51 21.49 48 48 48h384c26.51 0 48-21.49 48-48M256 128c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48m-96 144 55.515-55.515c4.686-4.686 12.284-4.686 16.971 0L272 256l135.515-135.515c4.686-4.686 12.284-4.686 16.971 0L512 208v112H160z"/>
    </svg>`,

    monitor: `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 100 100" xml:space="preserve">
      <path d="M90.315 12.993H9.684a5.644 5.644 0 0 0-5.644 5.645V67.83a5.644 5.644 0 0 0 5.644 5.645h30.359v8.556h-9.402c-.892 0-1.613.721-1.613 1.612v1.751c0 .892.721 1.613 1.613 1.613h37.901c.891 0 1.613-.721 1.613-1.613v-1.751c0-.892-.722-1.612-1.613-1.612h-8.586v-8.556h30.359a5.643 5.643 0 0 0 5.645-5.645V18.638a5.645 5.645 0 0 0-5.645-5.645M14.091 63.508V22.949h71.818v40.559z"/>
    </svg>`,

    link: `<svg width="64" height="64" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="m10 17.55-1.77 1.72a2.47 2.47 0 0 1-3.5-3.5l4.54-4.55a2.46 2.46 0 0 1 3.39-.09l.12.1a1 1 0 0 0 1.4-1.43 3 3 0 0 0-.18-.21 4.46 4.46 0 0 0-6.09.22l-4.6 4.55a4.48 4.48 0 0 0 6.33 6.33L11.37 19A1 1 0 0 0 10 17.55M20.69 3.31a4.49 4.49 0 0 0-6.33 0L12.63 5A1 1 0 0 0 14 6.45l1.73-1.72a2.47 2.47 0 0 1 3.5 3.5l-4.54 4.55a2.46 2.46 0 0 1-3.39.09l-.12-.1a1 1 0 0 0-1.4 1.43 3 3 0 0 0 .23.21 4.47 4.47 0 0 0 6.09-.22l4.55-4.55a4.49 4.49 0 0 0 .04-6.33"/>
    </svg>`,

    keyboard: `<svg width="64" height="64" viewBox="0 0 24 24" version="1.2" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 13h7v2H8zm-3 0h2v2H5zm0-4h2v1H5zm3 3v-1H5v1h2zm0-3h1v1H8zm1 2h1v1H9zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 3h2V9h-1v2h-1zm1 1h-1v1h-1v1h3v-1h-1zm2-7H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H4V8h16z"/>
    </svg>`,

    description: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 3h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m0 4h12a1 1 0 0 1 0 2H2a1 1 0 1 1 0-2m-.111 4H8.11c.491 0 .889.448.889 1s-.398 1-.889 1H1.89c-.492 0-.89-.448-.89-1s.398-1 .889-1"/>
    </svg>`,

    agreement: `<svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <path d="m30.68 19.05-1.9.64-1.65-9.06 4.24-1.7a1 1 0 1 0-.74-1.86l-5 2a1 1 0 0 0-.63 1.11v.18l-2.39 1.19a1 1 0 0 1-1.05-.09L19.13 9.6a3 3 0 0 0-1.8-.6h-2.71a2 2 0 0 0-1.78 1.09L11.05 10a1 1 0 0 0-.5.11l-1.67.83L6 10.22v-.13a1 1 0 0 0-.55-1l-4-2a1 1 0 0 0-.9 1.78l3.39 1.7-.82 9.06-1.8-.6A1 1 0 1 0 .68 21l3 1A1.2 1.2 0 0 0 4 22a1.1 1.1 0 0 0 .55-.16 1 1 0 0 0 .45-.75l.08-.93 1.29.64a3.07 3.07 0 0 0 1.09 1.89l5.77 4.14a2 2 0 0 0 2.84-.3 2.9 2.9 0 0 0 2.36-.13l5.41-2.7a2.31 2.31 0 0 0 1.24-1.7 1.7 1.7 0 0 0 0-.32l1.9-.63v.12a1 1 0 0 0 .47.68A1 1 0 0 0 28 22a1.2 1.2 0 0 0 .32-.05l3-1a1 1 0 1 0-.64-1.9m-22 2.06a1 1 0 0 1-.3-1.11.2.2 0 0 1 .15-.14c.06 0 .14 0 .26.08l6.05 4.37-.33 1Zm14.26.8-5.41 2.7a1 1 0 0 1-.76.06 2 2 0 0 0-.72-1.92l-6-4.37A2.22 2.22 0 0 0 8 18a2.2 2.2 0 0 0-1.18.84l-1.36-.68a.6.6 0 0 0-.18-.05l.53-5.83 3 .74L9 13a1 1 0 0 0 .45-.11l1.76-.89h.65l-.75 1.51a1 1 0 0 0 .44 1.34l.21.11a3 3 0 0 0 3.83-1h1l6.38 7.29a1 1 0 0 0 .09.15.26.26 0 0 1 .08.25.27.27 0 0 1-.14.26Zm1.36-2.07-6.56-7.5A1 1 0 0 0 17 12h-2a1 1 0 0 0-.89.55l-.11.21a1 1 0 0 1-.5.47L14.62 11h2.71a1 1 0 0 1 .6.2l2.48 1.86a3 3 0 0 0 3.14.28l1.87-.93 1.21 6.66Z"/>
    </svg>`,

    folder: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 3H7.71l-.85-.85L6.51 2h-5l-.5.5v11l.5.5h13l.5-.5v-10zm-.51 8.49V13h-12V7h4.49l.35-.15.86-.86H14v1.5zm0-6.49h-6.5l-.35.15-.86.86H2v-3h4.29l.85.85.36.15H14z"/>
    </svg>`
  }

  public getSvg(name: string): string {
    return this.icons[name] || ''
  }
}