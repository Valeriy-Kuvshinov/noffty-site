'use client'

export default function WavePunk() {
    return (
        <main className="game-page full w-h-100">
            <section className="page-contents flex column align-center w-h-100 layout-row">
                <h2>This is WavePunk</h2>
                <iframe
                    src="/games/wavePunk/index.html"
                    style={{
                        width: '800px', height: '600px', border: '0',
                        touchAction: 'none', overflow: 'hidden'
                    }}
                    title="WavePunk Game"
                    allow="autoplay; fullscreen *; midi; gyroscope;
                        accelerometer; cross-origin-isolated"
                    allowFullScreen={true}
                ></iframe>
            </section>
        </main>
    )
}