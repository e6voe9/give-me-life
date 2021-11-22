window.onload = function () {

  /** Accordion **/
  $('.accordion__title').on('click', function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $(this).next().slideUp();

    if ($('.accordion__title.active')) {
      $('.accordion__body.active').slideDown(300);
    }
  });



  /** Tabs **/
  $('.tabs-block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().parent().find('.tabContent').eq(i).css('display', 'flex').siblings('.tabContent').css('display', 'none');

        $('#modal-steps .content > .title').text($('#modal-steps .tabContent').eq(i).attr('data-title'));
      });
    });
  });

  $('.tabs-block-rules').each(function () {
    $(this).find('.tab-rules').each(function (i) {
      $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().parent().parent().find('.journal').eq(i).css('display', 'grid').siblings('.journal').css('display', 'none');
      });
    });
  });

  $('.tabs-block-review').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).click(function () {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).parent().parent().find('.tabContent-review').eq(i).css('display', 'flex').siblings('.tabContent-review').css('display', 'none');
      });
    });
  });



  /** Медиа запросы **/
  // matchMedia - метод для медиа запросов
  if (matchMedia) {
    let screen768 = window.matchMedia("(max-width: 768px)");
    let screen575 = window.matchMedia("(max-width: 575px)");
    screen768.addListener(changes768);
    screen575.addListener(changes575);
    changes768(screen768);
    changes575(screen575);
  }

  // Открыть/Закрыть меню в зависимости от размера экрана (768px)
  function changes768() {
    if (window.matchMedia('(max-width: 768px)').matches) {
      $('.header__bottom .menu').hide();
      $('.burger-menu').removeClass('burger-close');
    } else {
      $('.header__bottom .menu').show();
    }
  }

  // Функция открывания и скрытия Меню при нажатии на Бургер (Mobile)
  $('.burger-menu').click(function () {
    $('.header__bottom .menu').slideToggle(300); // Показ/Скрытие Меню
    $('.header__bottom .menu').css({ 'display': 'flex' });
    $('.burger-menu').toggleClass('burger-close'); // Добавление/Удаление класса .burger-close
  })

  //  (575px)
  function changes575() {
    if (window.matchMedia('(max-width: 575px)').matches) {
      // Табы в Team в моб версии
      $('.team-list__item .title').on('click', function () {
        $(this).next().slideToggle();
      });
    } else {
      return false;
    }
  }



  /** Модальные окна **/
  $modal = $('.modal');
  $closeModal = $('.modal .close');


  // Функция для закрытия Модальных окон
  $closeModal.on('click', function () {
    $(this).parents('.modal').fadeOut(200);
  })

  // Функция для закрытия Модального окна при нажатии на область за пределами контента
  window.onclick = function (event) {
    if ((event.target.className == "modal") || (event.target.className == "container")) {
      $('.modal').fadeOut(200);
    }
  }

  $(document).keydown(function (eventObject) {
    if (eventObject.which == 27) {
      $('.modal').fadeOut(200);
    };
  });


  // Функция для вызова модального окна Журнала и выбора таба
  $('.surrogacy-list').each(function () {
    $(this).find('.surrogacy').each(function (i) {
      $(this).find('.btn').on('click', function () {
        $("#modal-steps").fadeIn(200);

        $('#modal-steps .tab').removeClass('active');
        $('#modal-steps .tabContent').css('display', 'none')

        $('#modal-steps .tab').eq(i).addClass('active');
        $('#modal-steps .tabContent').eq(i).css('display', 'flex')

        $('#modal-steps .content > .title').text($('#modal-steps .tabContent').eq(i).attr('data-title'));
      });
    });
  });

  // Функция для закрытия модального окна Журнала при нажатии на кнопку Consultation
  $('#modal-steps .btn').on('click', function () {
    $(this).parents('.modal').fadeOut(200);
  });


  // Функция для вызова модального окна Анкет
  $('.open-modal-user-canada1').on('click', function () {
    $("#modal-user-canada1").fadeIn(200);
  })
  $('.open-modal-user-usa1').on('click', function () {
    $("#modal-user-usa1").fadeIn(200);
  })
  $('.open-modal-user-usa2').on('click', function () {
    $("#modal-user-usa2").fadeIn(200);
  })
  $('.open-modal-user-usa3').on('click', function () {
    $("#modal-user-usa3").fadeIn(200);
  })
  $('.open-modal-user-argentina1').on('click', function () {
    $("#modal-user-argentina1").fadeIn(200);
  })
  $('.open-modal-user-germany1').on('click', function () {
    $("#modal-user-germany1").fadeIn(200);
  })
  $('.open-modal-user-germany2').on('click', function () {
    $("#modal-user-germany2").fadeIn(200);
  })
  $('.open-modal-user-china1').on('click', function () {
    $("#modal-user-china1").fadeIn(200);
  })
  $('.open-modal-user-belgium1').on('click', function () {
    $("#modal-user-belgium1").fadeIn(200);
  })
  $('.open-modal-user-italy1').on('click', function () {
    $("#modal-user-italy1").fadeIn(200);
  })
  $('.open-modal-user-france1').on('click', function () {
    $("#modal-user-france1").fadeIn(200);
  })
  $('.open-modal-user-ukraine1').on('click', function () {
    $("#modal-user-ukraine1").fadeIn(200);
  })



  /** Карта **/
  let mapCount = 0;
  window.addEventListener('scroll', function () {
    mapCount++;
    if (mapCount == 1) {
      let script = document.createElement('script');
      script.src = 'https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2467dfbbd414306f38c00aa9048346ada3bf2ae105b1d1c84eb6a671b54fc5cd&amp;width=100%25&amp;height=100%&amp;lang=ru_RU&amp;scroll=false';
      document.getElementsByClassName('map-replace')[0].replaceWith(script)
    }
  });


  /** Слайдер Пользователей в Модальном окне **/
  new Swiper(".user-slider", {
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  //.b-popup

  const toggleOverflowBody = () => document.body.classList.toggle('overflow');

  const bPopups = document.querySelectorAll('.b-popup');

  const closePopup = popup => {
    popup.classList.remove('b-popup--active');
    toggleOverflowBody();
  };
  const openPopup = popup => {
    popup.classList.add('b-popup--active');
    toggleOverflowBody();
  };

  const broshurePopup = document.querySelector('.broshurePopup');
  const broshureBtn = document.querySelector('.broshureBtn');

  broshureBtn.addEventListener('click', () => openPopup(broshurePopup));

  if (bPopups.length !== 0) {

    bPopups.forEach(popup => {
      const bg = popup.querySelector('.b-popup__bg');
      const closeBtn = popup.querySelector('.b-popup__x-close-btn');

      bg.addEventListener('click', () => closePopup(popup));
      closeBtn.addEventListener('click', () => closePopup(popup));
    })

  }


  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  const broshureForm = document.querySelector('.broshureForm');

  broshureForm.addEventListener("submit", function (e) {
    e.preventDefault();

    let formData = {
      email: broshureForm.email.value.trim(),
      status: broshureForm.status.value,
    }

    const emailErrorBlock = broshureForm.email.nextElementSibling;

    if (!validateEmail(formData.email)) {
      emailErrorBlock.style.display = 'block';
      setTimeout(() => {
        emailErrorBlock.style.display = 'none';
      }, 3000)
      return;
    }

    const statusErrorBlock = broshureForm.status.parentElement.nextElementSibling;

    if (formData.status === '') {
      statusErrorBlock.style.display = 'block';
      setTimeout(() => {
        statusErrorBlock.style.display = 'none';
      }, 3000)
      return;
    }

    console.log(formData);
    // let request = new XMLHttpRequest();
    // const mailFileName = broshureForm.getAttribute("action");

    // request.addEventListener("load", function () {
    //   // when response is 200
    // })
    
    // request.open("POST", mailFile, true);
    // request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");

    // request.send(
    //   "totalPrice=" + encodeURIComponent(formData.totalPrice) +
    //   "&order=" + encodeURIComponent(formData.order) 
    // )
  })


}