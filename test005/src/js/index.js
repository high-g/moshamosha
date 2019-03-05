const class_image_area = document.querySelectorAll('.img_area');

const animationHero = () => {
    let cnt = 0;
    for(let image_area of class_image_area) {
        if(image_area.classList.contains('show')) {
            image_area.classList.remove('show');
            setShow(cnt)
            return;
        }
        cnt++;
    }
}

const setShow = (num) => {
    const check_arr = [1, 2, 0];
    const target_key = check_arr[num];
    class_image_area[target_key].classList.add('show');
}

setInterval(animationHero, 10000);