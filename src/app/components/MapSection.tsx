export default function MapSection() {
    return (
        <section id="mapa" className="py-12 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Ubicación del Terreno</h2>
            <div className="w-full h-80 md:h-[500px] rounded-lg overflow-hidden shadow">
                <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2192.2119754836804!2d-77.74864443892909!3d-10.738288277576656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDQ0JzE3LjkiUyA3N8KwNDQnNTAuMyJX!5e1!3m2!1ses-419!2spe!4v1751820326633!5m2!1ses-419!2spe" 
                width='100%'
                height='100%'
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
                    
                </iframe>
            </div>
        </section>
    );
}
