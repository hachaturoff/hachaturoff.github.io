window.addEventListener('DOMContentLoaded', function () {

    let offerWindow = document.querySelectorAll('.offer');
    let viewProductsButton = this.document.querySelector('.view-products-button ');
    let getDataOfferWind = document.getElementById('wrapper');

    const naturArrofferWindow = Array.from(getDataOfferWind.childNodes);


    for (let offerWindowIndex = 6; offerWindowIndex < offerWindow.length; offerWindowIndex++) {
        console.log(offerWindowIndex,offerWindow[offerWindowIndex].style.display = 'none');
    }
  
    function showOtherWindows(){    
      let offerWindowIndex = 5;
        while (offerWindowIndex < 11) {
            offerWindowIndex++;
            console.log(offerWindow[offerWindowIndex].style.display='block');
        }
    }

    viewProductsButton.addEventListener('click',
        showOtherWindows);
      
    function showRestWindows() {
        let offerWindowIndex = 11;
          while (offerWindowIndex < 17) {
            offerWindowIndex++;
            console.log(offerWindow[offerWindowIndex].style.display='block');
          }
    }
    viewProductsButton.addEventListener('dblclick',showRestWindows);







//////////////////////////////////////  РЕНДЕРИНГ КАРТОЧЕК ПО КЛАССАМ

    class ProductMain {
        constructor(src, id, parentSelector, classified, nameProduct, newPrice, oldPrice) {
            this.src = src;
            this.id = id;
            this.parent = document.querySelector(parentSelector);
            this.classified = classified;
            this.nameProduct = nameProduct;
            this.newPrice = newPrice;
            this.oldPrice = oldPrice;
        }

        renderCart() {
            const product = document.createElement('div');
            product.innerHTML = `
                <div id="${this.id}" class="offer">
                    <a class="product-classified-button " href="# ">${this.classified}</a>
                    <img src=${this.src}>
                    <p>${this.nameProduct}</p>
                    <div class="product-data ">
                        <div class="actual-prices">
                            <a class="price" href="# "><s>${this.oldPrice}</s>USD</a>
                            <a class="new-price " href="# ">${this.newPrice}</a>
                        </div>
                        <div class="evaluation-stars">
                            <a href="# "><img src="images/star.svg " alt="icons "></a>
                            <a href="# "><img src="images/star.svg " alt="icons "></a>
                            <a href="# "><img src="images/star.svg " alt="icons "></a>
                            <a href="# "><img src="images/star.svg " alt="icons "></a>
                            <a href="# "><img src="images/star.svg " alt="icons "></a>
                        </div>
                    </div>
                    <div class="order__btn">
                        <button  data-modal class="buy" id="purchase">КУПИТЬ</button>
                    </div>
                </div>`

            this.parent.append(product);
        }
    }

    /// идеально получить карточки с сервера , позже

    const renderCard = () => {

        new ProductMain(
            "/images/Tomato.png",
            "1",
            ".product-windows",
            " Vegetables",
            "Vegan Red Tomato",
            " 9.37",
            " 14.00").renderCart();


        new ProductMain(
            "images/Almonds.png",
            "2",
            ".product-windows",
            "Nuts",
            "Organic Almonds",
            " 18.00",
            " 21.00").renderCart();

        new ProductMain(
            "images/FreshCorn.png",
            "3",
            ".product-windows",
            " Vegetables",
            "Fresh Corn",
            " 18.00",
            " 21.23").renderCart();

        new ProductMain(
            "images/Champignons.png",
            "4",
            ".product-windows",
            "Mushrooms",
            "Vegan Champignons",
            "9.37",
            " 14.00").renderCart();

        new ProductMain(
            "images/Pumpkins.png",
            "5",
            ".product-windows",
            " Vegetables",
            "Organic Pumpkins",
            " 21.00",
            " 18.00").renderCart();

        new ProductMain(
            "images/Cucumbers.png",
            "6",
            ".product-windows",
            " Vegetables",
            "Cucumbers",
            " 21.23",
            " 18.00").renderCart();

        new ProductMain(
            "images/Papaiya.png",
            "7",
            ".product-windows",
            " Vegetables",
            "Vegan Papaiya",
            "9.37",
            " 14.00").renderCart();

        new ProductMain(
            "images/Ananas.png",
            "8",
            ".product-windows",
            " Fruits",
            "Organic Ananas",
            " 21.00",
            " 18.00").renderCart();

        new ProductMain(
            "images/Muskmelon.png",
            "9",
            ".product-windows",
            " Fruits",
            "Organic Muskmelons",
            " 21.00",
            " 18.00").renderCart();

        new ProductMain(
            "images/Strawberries.png",
            "10",
            ".product-windows",
            " Berries",
            "Strawberries",
            " 21.23",
            " 18.00").renderCart();

        new ProductMain(
            "images/Pomegranate.png",
            "11",
            ".product-windows",
            " Fruits",
            "Vegan Pomegranate",
            " 14.00",
            " 9.37").renderCart();

        new ProductMain(
            "images/Avocado.png",
            "12",
            ".product-windows",
            " Fruits",
            "Avocado",
            " 21.23",
            " 18.00").renderCart();
    }

    renderCard()


 /////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////// ЗАПОЛНЕНИЕ КОРЗИНЫ И МАССИВА ПРИ КЛИКЕ НА ТОВАР



   const offers = Array.from(document.getElementsByClassName('offer'))
   const cart = document.querySelector('.trolley-button')

   let arrIdProd = []


    offers.forEach((card) => {
        card.addEventListener('click', (e) => {
            const target = e.target
            if (target.className == 'buy') {

                    card.querySelector("button").setAttribute('disabled' , true)
                    arrIdProd.push(card.id)
                    cart.innerHTML = `Cart ${arrIdProd.length}`
                }

        })
    })



    /////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////  В С П Л Ы Т И Е  М О Д А Л Ь Н О Г О    О К Н А  К О Р З И Н Ы    П О К У П ОК (Modalwindow)



    const btnBuy = document.querySelectorAll('.buy');
    let natArrBtnPurchase = Array.from(btnBuy);
    let modalWindow = document.querySelector('.modal-window');
    let modalCloseBtn = document.querySelector('[data-close]');
    const modalTrigger = document.querySelector('[data-modal]');
    const cardBtn = document.querySelector('.trolley-button');

    let natArrTrigger = Array.from(modalTrigger);


    modalWindow.style.display = 'none';



    ///////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////// ОТКРЫТИЕ МОДАЛЬНОГО ОКНА


    let finishOrderObj = {}

    function openModal() {

        modalWindow.style.display = 'block';
        document.body.style.overflow == 'hidden';

        let inputEndPrice = document.querySelector('.input-end-price')
        let calcPrice = 0


        if (arrIdProd.length <= 0) {  ///   показывает текст пустая корзина если нет товара , где то есть баг)

            document.querySelector('.cart-empty').innerHTML = 'Корзина пуста';
            document.querySelector('.end-price').innerHTML = '';

        } else {

            document.querySelector('.cart-empty').innerHTML = '';



            offers.forEach((cart) => {
                arrIdProd.forEach( i => {

                    if (cart.id == i ) {

                        class ProductMain {
                            constructor(src, id, parentSelector, descriptProduct, price) {
                                this.src = src;
                                this.id = id;
                                this.parent = document.querySelector(parentSelector);
                                this.descriptProduct = descriptProduct;
                                this.price = price;
                            }

                            renderCart() {
                                const productTag = document.createElement('div');
                                productTag.innerHTML = `

                                <div class="item">
                                    <div class="buttons">
                                        <span class="delete-btn"></span>
                                        <span class="like-btn">&#128155;</span>
                                    </div>
                                        <div class="image">
                                        <img class="img" src=${this.src}>
                                        </div>
                                        <div class="description">
                                        <span class="descript-product">${this.descriptProduct}</span>                                        
                                        </div>
                                    <div class="quantity">
                                        <button class="plus-btn" type="button" >+</button>
                                        <input type="text" name="name" value=1>
                                        <button class="minus-btn" type="button" >-</button>
                                    </div>
                                    <div class="total-price">${this.price}</div>
                                </div>`
                                this.parent.append(productTag);
                            }

                        }



                        new ProductMain(

                            `${cart.querySelector("img").src}`,
                            `${cart.id}`,
                            `.shopping-cart-mod`,
                            `${cart.querySelector('p').innerText}`,
                            `${cart.querySelector(".new-price").innerText}`,).renderCart();

                        calcPrice += +cart.querySelector(".new-price").innerText // калькулируем сумму тех товаров которые выделили
                        inputEndPrice.value = calcPrice.toFixed(2) // оставляет две цифры после запятой

                    }

                })

            })

        }

        /////////////////////////////////////////////// создание заказа

        // let inputEndPrice = document.querySelector('.input-end-price')
        const orderBtn = modalWindow.querySelector('.order')

        let arrProducts = []
        let products = {}

        orderBtn.addEventListener('click', () => {
            items.forEach( item => {
                const nameProduct = item.querySelector('.descript-product').innerText
                const amountProduct = item.querySelector('input').value

                 product = {
                    name: nameProduct,
                    amount: amountProduct
                    }

                arrProducts.push(product)
            })

        products = {
            totalPrice: inputEndPrice.value,
            product: arrProducts
        }
        console.log(products)

        })



        ///////////////// калькулятор цены

        const items = Array.from(document.querySelectorAll('.item'))

        // let storagePrice = 0

        items.forEach( item => {

            item.addEventListener('click', (e) => {
                const target = e.target

                if (target.className == 'plus-btn') {

                    let totalPrice = item.querySelector('.total-price')
                    let itemValue = item.querySelector('input')
                    itemValue.value++

                    calcPrice += +totalPrice.innerText // дз сократить идентичные коды
                    inputEndPrice.value = calcPrice.toFixed(2)


                } if (target.className == 'minus-btn') {

                    let totalPrice = +item.querySelector('.total-price').innerText
                    item.querySelector('input').value--
                    calcPrice -= totalPrice // сократить идентичные коды
                    inputEndPrice.value = calcPrice.toFixed(2)
                }

            })


        })

      }



    cardBtn.addEventListener('click', openModal);



    ///////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////// ЗАКРЫТИЕ МОДАЛЬНОГО ОКНА



    function closeModal() {
        
        modalWindow.style.display = 'none';
        document.body.style.overflow == '';
        arrIdProd = [];
        document.querySelector('.shopping-cart-mod').innerHTML = '';
        // document.querySelector('.cart-empty').innerHTML = '';
        document.querySelector('.cart-empty').style.display = 'none'
        offers.forEach((cart) => {
            cart.querySelector("button").removeAttribute("disabled");
        })

        cart.innerHTML = `Cart 0`





    }

    modalCloseBtn.addEventListener('click', closeModal);


});