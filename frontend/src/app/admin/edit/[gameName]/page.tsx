import { UtilityService } from "../../../../services/utility.service"

export default async function GameEdit() {
    let cloudinaryKeys = { cloudName: '', uploadPreset: '' }

    try {
        const response = await UtilityService.getCloudinaryKeys()
        cloudinaryKeys = response
    } catch (error) {
        console.error('Failed to fetch Cloudinary keys', error)
    }

    return (
        <main className="admin-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <p>Cloud Name: {cloudinaryKeys.cloudName}</p>
                <p>Upload Preset: {cloudinaryKeys.uploadPreset}</p>
            </section>
        </main>
    )
}