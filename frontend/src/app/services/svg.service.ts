import { IconDictionary } from "../models/utility"

export class SvgService {
    private icons: IconDictionary = {
        home: `<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path d="M160-120v-375l-72 55-48-64 120-92v-124h80v63l240-183 440 336-48 63-72-54v375H160Zm80-80h200v-160h80v160h200v-356L480-739 240-556v356Zm-80-560q0-50 35-85t85-35q17 0 28.5-11.5T320-920h80q0 50-35 85t-85 35q-17 0-28.5 11.5T240-760h-80Zm80 560h480-480Z"/>
        </svg>`,

        back: `<svg width="64" height="64" viewBox="-5 0 25 25" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.546.57.698 10.994l-.09.08c-.363.35-.576.813-.608 1.364l.002.185c.03.49.243.954.664 1.354l-.005-.008 10.885 10.462a2.06 2.06 0 0 0 2.845 0 1.964 1.964 0 0 0 0-2.844l-9.403-9.03 9.403-9.144a1.964 1.964 0 0 0 0-2.844 2.06 2.06 0 0 0-2.845 0"/>
        </svg>`,

        camera: `<svg width="64" height="64" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
          <path fill="#333235" d="M11 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
          <path fill="#333235" d="M11 4V1H5v3H0v9h5c.8.6 1.9 1 3 1s2.2-.4 3-1h5V4zM6 2h4v2H6zm2 11c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4m7-7h-2V5h2z"/>
        </svg>`
    }

    public getSvg(name: string): string {
        return this.icons[name] || ''
    }
}