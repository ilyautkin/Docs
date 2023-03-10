# msGallery

Сниппет для вывода галереи товара.

[![](https://file.modx.pro/files/7/0/7/70795a067dcbc05e6cd13448ce196381s.jpg)](https://file.modx.pro/files/7/0/7/70795a067dcbc05e6cd13448ce196381.png)

## Параметры

| Параметр          | По умолчанию  | Описание                                                                                                                                   |
| ----------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **tpl**           | tpl.msGallery | Чанк оформления                                                                                                                            |
| **product**       |               | Идентификатор товара. Если не указан, используется id текущего документа.                                                                  |
| **limit**         |               | Лимит выборки результатов                                                                                                                  |
| **offset**        |               | Пропуск результатов с начала выборки                                                                                                       |
| **sortby**        | rank          | Сортировка выборки                                                                                                                         |
| **sortdir**       | ASC           | Направление сортировки                                                                                                                     |
| **toPlaceholder** |               | Если не пусто, сниппет сохранит все данные в плейсхолдер с этим именем, вместо вывода не экран.                                            |
| **where**         |               | Строка, закодированная в JSON, с дополнительными условиями выборки.                                                                        |
| **filetype**      |               | Тип файлов для выборки. Можно использовать "image" для указания картинок и расширения для остальных файлов. Например: "image,pdf,xls,doc". |
| **showLog**       |               | Показывать дополнительную информацию о работе сниппета. Только для авторизованных в контекcте "mgr".                                       |

*Можно использовать и другие [общие параметры pdoTools][1]*

## Оформление

Сниппет рассчитывает на работу с [чанком Fenom][2] и передаёт в него всего одну переменную `$files` с массивом файлов.

Вы можете увидеть все доступные плейсхолдеры галереи просто указав пустой чанк:

``` modx
<pre>[[!msGallery?tpl=``]]</pre>
```

[![](https://file.modx.pro/files/0/b/a/0babb052b84702f8ca9a9f32eda62312s.jpg)](https://file.modx.pro/files/0/b/a/0babb052b84702f8ca9a9f32eda62312.png)

Для оформлении галереи используется [Fotorama][3].
Вы можете указывать свои параметры прямо в чанке, [согласно инструкции][4].

При инициализации скриптов проверяется наличие в чанке элемента `.fotorama` внутри `#msGallery`.
Если он присутствует и содержит файлы, только тогда будете загружены скрипты и стили Fotorama.

Соответственно, если Fotorama вам не нужна - просто удалите класс `.fotorama` из чанка.

[1]: /components/pdotools/general-parameters
[2]: /components/pdotools/parser
[3]: http://fotorama.io/
[4]: http://fotorama.io/customize/options/