document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("cityContainer");

    if (container) {
        cities.forEach(city => {
            container.innerHTML += `
                <article class="col-12 col-md-6 col-lg-4 mb-4">
                    <div class="card h-100 shadow-sm text-center p-3">
                        <h5>${city.name}</h5>
                        <p class="display-6">${city.temperature}°C</p>
                        <span class="badge bg-info">${city.condition}</span>
                        <button class="btn btn-primary mt-3 w-100" onclick="viewDetail(${city.id})">
                            Ver detalle
                        </button>
                    </div>
                </article>
            `;
        });
    }

    const detailSection = document.getElementById("cityDetail");

    if (detailSection) {
        const id = localStorage.getItem("cityId");
        const city = cities.find(c => c.id == id);

        detailSection.innerHTML = `
            <article class="card p-4 shadow-sm">
                <h2>${city.name}</h2>
                <p>Temperatura: ${city.temperature}°C</p>
                <p>Humedad: ${city.humidity}%</p>
                <p>Viento: ${city.wind} km/h</p>
            </article>
        `;

        const forecastContainer = document.getElementById("forecastContainer");

        city.forecast.forEach(temp => {
            forecastContainer.innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 mb-3">
                    <div class="card text-center p-3">
                        <p>${temp}°C</p>
                    </div>
                </div>
            `;
        });
    }
});

function viewDetail(id) {
    localStorage.setItem("cityId", id);
    window.location.href = "detalle.html";
}