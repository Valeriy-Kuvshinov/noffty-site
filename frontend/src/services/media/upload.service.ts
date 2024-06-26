export const uploadService = {
    uploadImg
}

async function uploadImg(file: File, folderName: string, cloudName: string, uploadPreset: string) {
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
    try {
        const folderPath = folderName
        const formData = new FormData()
        formData.append('upload_preset', uploadPreset)
        formData.append('file', file)
        formData.append('folder', folderPath)

        const response = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: formData
        })
        const data = await response.json()
        return data
    } catch (err) {
        console.error('Failed to upload', err)
        throw err
    }
}