


// add for all classList same time 
function add_classList(L, elm) {
    L.forEach(className => {
        elm.classList.add(className);
    });
}

function add_card() {
    const dic_col_work = document.querySelector("#col-work");
    const dic_col_comingSoon = document.querySelector("#col-coming");
    //  format date  ==> M-D-Y or Y-M-D 

    axios.get("Php/events.php").then(res => {
        const data = res.data;
        data.forEach(event => {
            card = Create_card(event);
            if (card[1] == true) {
                dic_col_work.append(card[0]);
            } else {
                dic_col_comingSoon.append(card[0]);
            }
        });
        
    });
}

function Create_card(obj) {
    // Card 
    const div_card = document.createElement("div")
    add_classList(["card_container"], div_card)
    div_card.setAttribute("id", `${obj.id}`)

    // Body-Card 
    const div_body = document.createElement("div")
    add_classList(["card_content"], div_body)


    // Title-Card 
    const h2 = document.createElement("h2")
    add_classList(["card_title"], h2)
    h2.innerText = obj.title

    // disc-Card 
    const disc = document.createElement("p")
    add_classList(["card_description"], disc)
    disc.innerText = obj.disc

    // button
    const Btn = document.createElement("button")
    Btn.innerText = "View details"
    add_classList(["card_button"], Btn)


    Btn.setAttribute("onclick", `showblur(${obj.id})`);



    // date-Card 
    const div_date = document.createElement("div")
    const span_day = document.createElement("span");
    const span_month = document.createElement("span");
    span_month.id = "month"


    const d = new Date(obj.date).getDate();
    const m = new Date(obj.date).getMonth();
    const y = new Date(obj.date).getFullYear();
    span_day.innerText = d
    span_month.innerText = transferMonth(m)
    add_classList(["card_date"], div_date)
    div_date.append(span_day, span_month)


    const div = document.createElement("div")

    div.append(h2, disc)
    div_body.append(div, Btn)
    div_card.append(div_date, div_body)

    return [div_card, Testing_date(y, m, d)]
}

function Testing_date(y, m, d) {
    var now = new Date();
    const Y = now.getFullYear();
    const D = now.getDate();
    const M = now.getMonth();
    var string_now = Y.toString() + "-" + M.toString() + "-" + D.toString()
    string = y.toString() + "-" + m.toString() + "-" + d.toString()
    if (string_now > string) {
        return true
    }
    else {
        return false
    }
}
function transferMonth(n) {
    month = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    return month[n]
}


add_card()


// --------------Focus planning --------------------------------------------------------------------------------------

div_blur = document.querySelector(".blur");
function showblur(div) {
    div_blur.classList.toggle("active_blur");
    div_blur.style.display = "block";
    axios.get("Php/events.php").then(res => {
        const data = res.data;
        data.forEach(event => {
            if (event.id == div.id) {
                cardinblur(div_blur, event);
            }
        });
    });

}


function hideblur(div) {
    div_blur.style.display = "none";
    div_blur.classList.remove("active_blur"); // Use remove() instead of toggle() to ensure the class is removed
    axios.get("Php/events.php").then(res => {
        const data = res.data;
        data.forEach(event => {
            if (event.id == div.id) {
                const cardToRemove = div_blur.querySelector(".card_container");
                if (cardToRemove) {
                    div_blur.removeChild(cardToRemove);
                }
            }
        });
    });

}


function cardinblur(div_blur, obj) {
    // Card 
    const div_card = document.createElement("div")
    add_classList(["card_container"], div_card)

    // Body-Card 
    const div_body = document.createElement("div")
    add_classList(["card_content"], div_body)


    // Title-Card 
    const h2 = document.createElement("h2")
    add_classList(["card_title"], h2)
    h2.innerText = obj.title

    // disc-Card 
    const disc = document.createElement("p")
    add_classList(["card_description"], disc)
    disc.innerText = obj.disc

    // button
    const Btn = document.createElement("button")
    Btn.innerText = "Close"

    Btn.setAttribute("onclick", `hideblur(${obj.id})`);
    add_classList(["card_button"], Btn)


    // date-Card 
    const div_date = document.createElement("div")
    const span_day = document.createElement("span");
    const span_month = document.createElement("span");
    span_month.id = "month"


    const d = new Date(obj.date).getDate();
    const m = new Date(obj.date).getMonth();
    const y = new Date(obj.date).getFullYear();
    span_day.innerText = d
    span_month.innerText = transferMonth(m)
    add_classList(["card_date"], div_date)
    div_date.append(span_day, span_month)


    const div = document.createElement("div")


    
    div.append(h2, disc)
    div_body.append(div, Btn)
    div_card.append(div_date, div_body)
    div_blur.append(div_card)
}

// ---------------------------------------------------------------------------------------------------------------------------
// scroll_bar  in planning 
const carousels = document.querySelectorAll('.scroll_bar');

carousels.forEach(carousel => {
    let isDragging = false;
    let startY;
    let startScrollTop;

    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startY = e.pageY;
        startScrollTop = carousel.scrollTop;

        // Prevent text selection while dragging
        e.preventDefault();
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const deltaY = e.pageY - startY;
        carousel.scrollTop = startScrollTop - deltaY;
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.classList.remove('dragging');
    });
});