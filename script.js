const menuItems = document.querySelectorAll('.menu-item'),
messageNotifiaction = document.querySelector('#message-notification'),
messages = document.querySelector('.messages'),
message = messages.querySelectorAll('.message'),
messageSearch = document.querySelector('#message-search'),
theme = document.querySelector('#theme'),
themeModal = document.querySelector('.customize-theme'),
fontSize = document.querySelectorAll('.choose-size span'),
colorPalette = document.querySelectorAll('.choose-color span'),
bg1 = document.querySelector('.bg-1'),
bg2 = document.querySelector('bg-2'),
bg3 = document.querySelector('.bg-3');
var root = document.querySelector(':root');

const changeActiveItem = () => {
    menuItems.forEach(item  => {
        item.classList.remove('active')
    })
}

menuItems.forEach(item => {
    item.addEventListener('click' , () => { 
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications') {
            document.querySelector('.notifications-popup').style.display = "none";
        }
        else {
            document.querySelector('.notifications-popup').style.display = "block";
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
})


const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val)
    message.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else {
            chat.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup' , searchMessage);

messageNotifiaction.addEventListener('click' , () => {
    messages.style.boxShadow = '0 0 1rem var(--primary)';
    messageNotifiaction.querySelector('.notification-count').style.display = 'none';
    setTimeout(function() {
        messages.style.boxShadow = 'none'
    },2000)
})

const openThemeModal = () => {
    themeModal.style.display = 'grid'
}
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click',closeThemeModal)
theme.addEventListener('click' , openThemeModal)

const removeSizeSelector = () => {
    fontSize.forEach(size => {
        size.classList.remove('active')
    })
}

fontSize.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('----sticy-top-left','5.4rem');
            root.style.setProperty('----sticy-top-right','5.4rem');
        }else  if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticy-top-left','5.4rem');
            root.style.setProperty('----sticy-top-right','-7rem');
        }else  if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticy-top-left','-2rem');
            root.style.setProperty('----sticy-top-right','-17rem');
        }else  if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticy-top-left','-5rem');
            root.style.setProperty('----sticy-top-right','-25rem');
        }else  if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticy-top-left','-12rem');
            root.style.setProperty('----sticy-top-right','-35rem');
        }
        document.querySelector('html').style.fontSize = fontSize;
    })
})

const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicer => {
        colorPicer.classList.remove('active')
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click' , () => {
        let primary;
        changeActiveColorClass();

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        }
        if(color.classList.contains('color-2')) {
            primaryHue = 52;
        }
        if(color.classList.contains('color-3')) {
            primaryHue = 352;
        }
        if(color.classList.contains('color-4')) {
            primaryHue = 152;
        }
        if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        color.classList.add('active')
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBg = () => {
    root.style.setProperty('--light-color-lightness',lightColorLightness);
    root.style.setProperty('--white-color-lightness',whiteColorLightness);
    root.style.setProperty('--dark-color-lightness',darkColorLightness);
}

bg1.addEventListener('click' , () => {
    bg1.classList.add('active');
    bg2.classList.remove('active');
    bg3.classList.remove('active')

    window.location.reload();
})

bg2.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    bg2.classList.add('active');
    bg1.classList.remove('active');
    bg3.classList.remove('active')

    changeBg()
})

bg3.addEventListener('click' , () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    bg3.classList.add('active');
    bg1.classList.remove('active');
    bg2.classList.remove('active')

    changeBg()
})



