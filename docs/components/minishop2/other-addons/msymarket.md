# msYmarket

## Настройки модуля

Для редактирования настроек скрипта перейдите в раздел **"Настройки системы"** и выберите фильтр **"yandexmarket"**

![msYmarket](https://file.modx.pro/files/c/5/d/c5d2374dd38b264392a122a128cd866a.png)

Доступные настройки:

* Название компании (по умолчанию берется из настроек MODX)
* Название сайта (по умолчанию берется из настроек MODX)
* Адрес сайта (по умолчанию берется из настроек MODX)
* Расположение файла (по умолчанию - в корневой папке {core_path}../goods.yml)
* Валюты (по умолчанию - весь список валют для Яндекс.Маркета: _RUB,EUR,USD,UAH,BYR,KZT_)
* Основная валюта на сайте (валюта, которая используется на сайте, по умолчанию - рубль)
* Основная валюта для выгрузки в Яндекс.Маркет (для выгрузки можно установить отдельную валюту - разрешены RUB,UAH,BYR,KZT. По умолчанию - рубль)
* Поле "Доставка" (название дополнительного поля, по которому будет проставляться возможность доставки для каждого товара. Если не указывать, то возможность доставки есть у всех товаров)
* Поле "В наличии" (название дополнительного поля, по которому будет проставлять наличие товара. Если не указывать, то в наличии все товары)
* Основные поля (список основных полей ресурсов с соответствием YML тэгов)
* Дополнительные поля (список TV-паратров с соответствием YML тэгов)
* Фильтр (json-массив с ограничениями для выборки товаров)
* Список текстовых полей (Через запятую спиок полей, которые обрабатываются как простой текст)
* Список полей для добавления URL сайта (К указанным полям будет добавлен в начале URL сайта. Актуально для picture и, возможно, других)
* Использовать товары и категории miniShop2 (Если включено, в выгрузку попадут только товары и категории MS2 - msProduct, mscategory. Если MS2 не используется, отключите настройку)
* Список шаблонов категорий (Ограничивающий список шаблонов категорий через запятую. Обязателем для заполнения, если не используется MS2)
* Список шаблонов товаров (Ограничивающий список шаблонов товаров через запятую. Обязателем для заполнения, если не используется MS2)

## Формат полей выгрузки товаров

Все варианты можно комбинировать между собой, формат одинаков для основных полей и TV. Единственный тэг, который всегда будет в секции _offer_ - **url**, его формирование зашито в класс. Все остальные поля можно легко добавлять и удалять, что позволяет использовать компонент совместно с любыми модулями интернет-магазинов или даже без них. Дополнительное синтетическое поле - vendor, в нем хранится название производителя (если minishop2 установлен).

Возможность полноценного использования с другими модулями ИМ предусмотрена. На текущий момент выбор категорий для выгрузки в админке в дереве поддерживается только для minishop2. Для остальных вариаций ИМ выгрузка осуществляется сразу по всем категориям с учетом ограничивающего списка шаблонов.

### Простой вариант

`price=>price;pagetitle=>name`

> Результат:

```xml
    <price>0.00</price>
    <name>тест 2222</name>
```

> Поля param

`price=>param.Цена;pagetitle=>name`

> Результат:

> Поля param с произвольными атрибутами

`weight=>param.Вес:unit="кг":type="Брутто";pagetitle=>name`

> Результат:

```xml
<param name="Вес" unit="кг" type="Брутто">5.00</param>
<name>тест 2222</name>
```

## Настройки выгрузки

![Настройки выгрузки](https://file.modx.pro/files/4/d/f/4df80ac0b6e556e50a9eae353716c55c.png)

* Выбор категорий

Вы можете указать для выгрузки любые категории товаров на сайте. Для этого нужно поставить галочку напротив нужной категории (все дочерние категории будут отмечены автоматически). Если не выбирать категорий - в выгрузке будут участвовать все категории

* Выбор параметров
  * Производители
  * Тэги
  * Цвета

Вы можете отфильтровать выборку с помощью базовых параметров, перечисленных выше. По умолчанию товары не фильтруются.

## Выгрузка

Для выгрузки используется вторая вкладка с названием **Выгрузка**

![Выгрузка](https://file.modx.pro/files/b/d/2/bd26231a09d3b60691db2ddabe460b39.png)

На этой вкладке Вы можете ознакомиться с логом выгрузки:

* Количество выбранных товаров
* Причины, по которым были отфильтрованы те или иные товары
* Количество товаров в итоговой выгрузке

## Пример выгрузки

```xml
<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="2014-05-04 21:38">
    <shop>
        <name>Рога и копыта</name>
        <company>Рога и копыта</company>
        <url>http://modx/</url>
        <currencies>
            <currency id="RUB" rate="CBRF" />
            <currency id="EUR" rate="CBRF" />
            <currency id="USD" rate="CBRF" />
            <currency id="UAH" rate="1" />
            <currency id="BYR" rate="CBRF" />
            <currency id="KZT" rate="CBRF" />
        </currencies>
        <categories>
            <category id="2">Одежда</category>
            <category id="4">Обувь</category>
            <category id="8" parentId="2">Майки</category>
            <category id="9" parentId="2">Рубашки</category>
            <category id="10" parentId="2">Пиджаки</category>
            <category id="11" parentId="2">Пальто</category>
            <category id="12" parentId="4">Кроссовки</category>
            <category id="13" parentId="4">Туфли</category>
            <category id="14" parentId="4">Босоножки</category>
            <category id="15">Нижнее белье</category>
        </categories>
        <offers>
            <offer id="5" available="true">
                <url>http://modx/index.php?id=5</url>
                <price>0.00</price>
                <currencyId>UAH</currencyId>
                <categoryId>4</categoryId>
                <picture>http://modx/</picture>
                <delivery>true</delivery>
                <name>Очки для плавания</name>
                <description></description>
            </offer>
            <offer id="3" available="true">
                <url>http://modx/index.php?id=3</url>
                <price>200.00</price>
                <currencyId>UAH</currencyId>
                <categoryId>2</categoryId>
                <picture>http://modx/</picture>
                <delivery>true</delivery>
                <name>тест 2222</name>
                <description></description>
            </offer>
        </offers>
    </shop>
</yml_catalog>
```