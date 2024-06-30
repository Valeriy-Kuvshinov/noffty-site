'use client'
import { useEffect, useState } from "react"
import { uploadService } from "../../services/media/upload.service"
import { ImageContainer } from "../general/ImageContainer"

interface ImageUploaderProps {
    index: number
    defaultImgUrl: string
    folderName: string
    cloudName: string
    uploadPreset: string
    onUploaded: (data: { url: string; index: number }) => void
}

interface ValidationResult {
    isValid: boolean
    errorHeader?: string
    errorMessage?: string
}

export function ImageUploader({ index, defaultImgUrl, folderName, cloudName,
    uploadPreset, onUploaded }: ImageUploaderProps) {
    const [imgUrl, setImgUrl] = useState('')
    const [isUploading, setIsUploading] = useState(false)
    const inputId = `imgUpload-${index}`

    useEffect(() => {
        setImgUrl(defaultImgUrl)
    }, [defaultImgUrl])

    function validateFile(file: File): ValidationResult {
        const fileSize = file.size / 1024 / 1024
        const allowedFormats = ['image/avif']

        if (fileSize > 2) {
            return {
                isValid: false,
                errorHeader: 'Too Big!',
                errorMessage: 'File size exceeds 2 MB!',
            }
        }
        if (!allowedFormats.includes(file.type)) {
            return {
                isValid: false,
                errorHeader: 'Invalid format!',
                errorMessage: 'Only AVIF is allowed!',
            }
        }
        return { isValid: true }
    }

    function onFileDropped(file: File) {
        uploadFile(file)
    }

    async function uploadFile(file: File) {
        const validation = validateFile(file)
        if (!validation.isValid) return
        setIsUploading(true)

        try {
            const data = await uploadService.uploadImg(file, folderName, cloudName, uploadPreset)
            setImgUrl(data.secure_url)
            onUploaded({ url: data.secure_url, index })
        } catch (error) {
            console.error('Upload failed', error)
        } finally {
            setIsUploading(false)
        }
    }

    function onFileInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (event.target.files && event.target.files.length > 0) {
            uploadFile(event.target.files[0])
        }
    }

    function getUploadLabel() {
        if (imgUrl) return 'Replace Image?'
        return isUploading ? 'Uploading....' : 'Upload Image'
    }

    function handleDragOver(event: React.DragEvent<HTMLElement>) {
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.classList.add('drag-over')
    }

    function handleDragLeave(event: React.DragEvent<HTMLElement>) {
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.classList.remove('drag-over')
    }

    function handleDrop(event: React.DragEvent<HTMLElement>) {
        event.preventDefault()
        event.stopPropagation()
        event.currentTarget.classList.remove('drag-over')

        const files = event.dataTransfer.files
        if (files && files.length > 0) onFileDropped(files[0])
    }

    return (<article className="upload-preview" role="region" aria-labelledby="upload-label"
        aria-describedby="upload-description" onDragOver={handleDragOver}
        onDragLeave={handleDragLeave} onDrop={handleDrop}>
        <div className="file-upload-container flex column">
            <label htmlFor={inputId} className="flex column fast-trans" id="upload-label">
                <span id="upload-description" className="family-bold text-center fast-trans">
                    {getUploadLabel()}
                </span>
                <ImageContainer src={imgUrl} alt="preview image" />
            </label>
            <input type="file" onChange={onFileInputChange}
                accept="image/*" id={inputId} style={{ display: 'none' }}
                aria-labelledby="upload-label" aria-describedby="upload-description"
            />
        </div>
    </article>)
}