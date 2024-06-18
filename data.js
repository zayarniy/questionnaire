
let dataQuestions =
  [
    /*{
      groupName: 'ИТ в профессии',
      questions:
        [
          "Сформулируйте современное понятие информации.",
          "В чем суть онтологического и методологического подходов к понятию информации?",
          "Перечислите свойства информации.",
          "Какими показателями качества характеризуется экономическая информация?",
          "Перечислите характеристики, положенные в основу классификации информации.",
          "Проведите сравнение таких понятий, как сигнал, сообщение, знак, буква, символ, данные, знания.",
          "В чем различие между аналоговыми, дискретными, квантованными цифровыми сигналами?",
          "В чем разница между информацией, данными и знаниями?",
          "Назовите меры, единицы количества и объема информации.",
          "В чем разница между аналоговым и цифровым сигналом",
          "Какие недостатки у аналогового сигнала",
          "Почему аналоговый сигнал называется аналоговым",
          "Что такое дискретизация сигнала?",
          "Какие два основных способы кодирования изображений существуют?",
          "Что означает 'сжатие с потерями'",
          "В чем основное отличие формата PNG от формата JPG?",
          "Какие графические форматы вы знаете? Чем они отличаются?",
          "В какой системе счисления кодируется информация в компьютерах? Почему в этой системе счисления?"
        ]
    },
    {
      groupName: 'Компьютерные сети. Первоначальные',
      questions:
        [
          'Первая глобальная сеть - ARPAnet. История развития.',
          'Цель построения сетей.',
          'Типы серверов.',
          'Понятие компьютерной сети. Размеры сетей.',
          'Интернет. История развития.',
          'Разновидности сетевого оборудования.',
          'Конечные системы. Промежуточные системы.',
          'Семиуровневая модель OSI.',
          'История разработки модели OSI. 10.Инкапсуляция. Сущность.',
          'Схемы взаимодействия устройств.',
          'Топологии сети.',
          'Вероятностные методы доступа: CSMA/CD, CSMA/CA.',
          'Основные технологии передачи данных.',
          'Широкополосная передача данных. 16.Узкополосная передача данных.',
          'Телефонная линия. Линия Т1. 18.Аналоговая и цифровая информация.',
          'Схема и сущность побитной и посимвольной синхронизации.',
          'Технология контроля информации.',
          'Горизонтальный и вертикальный контроль суммы.',
          'Способы реализации управления потоком.',
          'Управляемые и неуправляемые носители.',
          'Типы кабеля.',
          'Конструкция коаксиала.',
          'Стандарты и интерфейсы Ethernet.',
          'Категории витой пары.',
          'Устойчивость кабеля к перекрестным помехам.',
          'Аксессуары кабельных систем.',
          'Схемы сети на витой паре.',
          'Назначение повторителя.',
          'Сетевые протоколы: TCP/IP, IPX/SPX, NETBEUI.',
          'Классификация сетевых интерфейсов.',
          'Факторы при выборе NIC.',
          'Понятие ширины полосы пропускания и пропускная способность.',
          'Типы NIC.',
          'Определение драйвера.',
          'Программный интерфейс NDIS.',
          'Функции повторителя.'
        ]
    },
*/
    {
      //Вопросы строятся на основе тем занятий.
      groupName: 'Компьютерные сети. Андрей Созыкин',
      questions:
        [
          'Классификация сетей. Сети с коммутацией пакетов. Технологии передачи данных. Протяженность.',
          'Топологии сетей. Популярные топологии. Виды топологий',
          'Стандарты компьютерных сетей. IEEE. Роль стандартов в работе сетей. Документы RFC. Рекомендации W3C',
          'Электронная почта. Протоколы SMTP, ESMTP, POP3, IMAP',
          'Протокол HTTP. Постоянное соединение в HTTP. Кэширование в HTTP',
          'Прикладной уровень. Система доменных имен DNS. Протокол DNS. Типы записей DNS',
          'Интерфейс сокетов. Протоколы, интерфейсы, сокеты',
          'Протокол TCP. Управление потоком. Управление перегрузкой',
          'Протокол ICMP. Протокол UDP',
          'Протокол IP. Маршрутизация. Фрагментация',
          'Сетевой уровень. IP-адреса',
          'Wi-Fi. На каком уровне OSI работает. Что такое WI-FI джунгли. Сервисы Wi-Fi',
          'VLAN. Протокол STP',
          'Ethernet. Метод CSMA/CD. Коммутаторы Ethernet',
          'Технологий Ethernet. MAC адреса',
          'Модель OSI. Модель TCP/IP. Связь моделей',
        ]

    },

    //Вопросы строятся на основе тем занятий.


    {
      groupName: 'Архитектура аппаратных средств',
      questions:
        [
          'Типы архитектур. Основные принципы каждой их них',
          'Виды компьютерной памяти. Для чего нужна каждая.',
          'Что такое стек. Виды стеков. Для чего используется стек в компьютере',
          'Устройство ЖК-монитора. Типы ЖК-мониторов',
          'Перечислите известные вам типы принтеров. Опишите принцип работы одного из них',
          'Для чего нужна материнская плата? Что такое сокет, на что влияет и зачем нужен',
          'Что такое южный и северный мост? Что такое чипсет? Что такое VRM и на что влияет.',
          'ЦИСК и РИСК архитектруры. Почему процессоры Intel пропали из Apple Mac?',
          'Как работает процессор. Логические элементы процессора. Сумматор, триггер, дешифратор',
          'Представление чисел в памяти компьютера. Как хранятся целые положительные и целые отрицательные числа. Как храняться дробные числа',
          'Что такое стек? Какие виды стеков бывают. Для чего стек используется',
          'Корпус для ПК, что важно при выборе: отличия, размеры, внешний вид. Какой лучше?',
          'Основные характеристика блоков питания. Как выбрать БЛОК ПИТАНИЯ?',
          'Назначение системы охлаждения для ПК. Виды систем охлаждения ПК.',
          'Основные характеристики современных видеокарт. Основные критерии при выборе видеокарты',
          'Основные этапы развития электронно-вычислительной техники. Как называется этап развития на котором находимся мы сейчас. Основные отличительные характеристики каждого из этапов.',
          'Эволюция носителей информации. Основные носители информации и их характеристики',
          'Эволюция оперативной памяти. Виды оперативной памяти. Основные характеристики оперативной памяти'

        ]


    },
    //Примеры выполнения работы
    {
      groupName: 'Дополнительные вопросы от сокурсников',
      questions:
        [
          `В какие 3 этапа работает протокол STP.`,
          `Какие преимущества у STP.`,
          `По какому стандарту работает STP.`,
          `Что такое протокол STP.`,
          `Для чего нужен STP`,
          'Сколько есть стандартов IEEE 802.11',
          'Wi-Fi использует разделяемую среду из-за этого возможны ...',
          'С помощью чего можно решить проблемы скрытой и засвеченной станции?',
          'В беспроводной сети часто возникают ошибки из-за этого Wi-Fi использует ...',
          'Какие есть дополнительные функции Wi-Fi?',
          'Какие есть наборы сервисов Wi-Fi?',
          `Зачем нужны стандарты сетей?`,
          `Какие бывают типы стандартов?`,
          `Для чего нужен стандарт IEEE?`,
          `Всегда ли были стандарты сетей?`,
          'Хаитов К. Как расшифровывается Wi-Fi?',
          'Хаитов К. В каком году был зарегистрирован Технология Wi-Fi - беспроводной аналог стандарта Ethernet?',
          'Хаитов К. Для того чтобы работал Wi-Fi необходимо?',
          'Хаитов К. Какую дальность приема может обеспечить Wi-Fi?',
          'Хаитов К. А что еще является помехами для Wi-Fi-соединения?',
          'Хаитов К. При какой погоде работает Wi-Fi?',
          'Хаитов К. Какие ОС семейства Windows поддерживают Wi-Fi?'
        ]

    }, {
      groupName: 'Архитектура аппаратных средств. Практические работы',
      questions:
        [
          'Dosbox — задание',
          'Подбор монитора для дома',
          'Подбор принтера',
          'Компьютерные сборки',
          'Выполнить задания на странице 7 (ссылка)',
          'Самостоятельная работа по машинному представлению чисел в памяти компьютера',
          'Практика. Создание схем'

        ]


    }

  ]
