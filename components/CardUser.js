const CardUser = (user) => {
    const scroll = document.createElement('div');
    const div1 = document.createElement('div')
    const div2 = document.createElement('div')
    const div3 = document.createElement('div')
    const div4 = document.createElement('div')
    const img_div1 = document.createElement('img')
    const text_span = document.createElement('span')
    const button_plus = document.createElement('button')
    const span_numbers = document.createElement('span')
    const button_minus = document.createElement('button')
    const span_price = document.createElement('span')
    const button_remove = document.createElement('button')

    scroll.classList.add('scroll')
    div1.classList.add('div1')
    div2.classList.add('div2')
    div3.classList.add('div3')
    div4.classList.add('div4')
    text_span.classList.add('text_span')
    button_plus.classList.add('plus')
    span_numbers.classList.add('numbers')
    button_minus.classList.add('minus')
    span_price.classList.add('price')
    button_remove.classList.add('remove')
    
    img_div1.src = user.image;
    img_div1.alt = 'img'
    text_span.innerHTML = user.title;
    span_price.innerHTML = user.price;
    button_remove.innerHTML = 'Remove'
    button_plus.innerHTML = '+'
    button_minus.innerText = '-'
    span_numbers.innerText = '0'

    scroll.append(div1,div2,div3)
    div1.append(img_div1)
    div2.append(text_span, button_plus, span_numbers, button_minus)
    div4.append(text_span)
    div3.append(span_price, button_remove)



    button_plus.onclick = () => {
        let number = parseInt(span_numbers.innerText);
        number += 1;
        span_numbers.innerText = number;
    };

    button_minus.onclick = () => {
        let number = parseInt(span_numbers.innerText);
        if (number > 0) {
            number -= 1;
            span_numbers.innerText = number;
        }
    };

    button_remove.onclick = () => {
        const idx = card.indexOf(user);
        if (idx !== -1) {
            card.splice(idx, 1);
            scroll.remove();
            total_view.innerHTML = card.length;
            reload(card, scroll, CardUser);
        }
    };
    return scroll;
};
const scroll = document.querySelector('.scroll');


