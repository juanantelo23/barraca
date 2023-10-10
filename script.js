const peliculasJSON = "barraca.json";

// Fetch JSON data
async function getJSONData(productos) {
    return fetch(productos)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw Error(response.statusText);
            }
        })
        .then(function(response) {
            return { status: 'ok', data: response };
        })
        .catch(function(error) {
            return { status: 'error', data: error };
        });
}

document.addEventListener("DOMContentLoaded", function() {
    getJSONData(peliculasJSON).then(function(resultObj) {
        if (resultObj.status === "ok") {
            const productosArray = resultObj.data.productos;
            showCategoriesList(productosArray);
        }
    });
});

function showCategoriesList(array) {
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        htmlContentToAppend += `
            <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
                <div class="card">
                    <img src="${array[i].imagen}" class="card-img-top" alt="peli image">
                    <div class="card-body">
                        <h5 class="card-title">${array[i].nombre}</h5>
                        <p class="card-text">Descripcion: ${array[i].descripcion}</p> 
                        <p class="card-text">Stock: ${array[i].cantidad_stock}</p>
                        <p class="card-text">Precio: ${array[i].costo_asociado}</p>
                        <button type="button" class="btn btn-primary" onclick="setCatID(${array[i].id})">Agregar a mi carrito</button>
                    </div>
                </div>
            </div>
        `;
    }
    document.getElementById("container").innerHTML = htmlContentToAppend;
}
 













