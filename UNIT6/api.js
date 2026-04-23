let o = {
    status: "success",
    products: [
        { id: 1, price: 100 },
        { id: 2, price: 200 },
        { id: 3, price: 300 }
    ]
};
function APIResponse(api) {
    if (api.status === "success") {
        if (api.products) {
            api.products.map((p) => {
                console.log(p.id, p.price);
            });
        }
    }
}
APIResponse(o);
export {};
