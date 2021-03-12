### Hexlet tests and linter status:
[![Actions Status](https://github.com/mn81566/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/mn81566/frontend-project-lvl2/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/ca05ad0e67dec238d69f/maintainability)](https://codeclimate.com/github/mn81566/frontend-project-lvl2/maintainability)

[![Test Coverage](https://api.codeclimate.com/v1/badges/ca05ad0e67dec238d69f/test_coverage)](https://codeclimate.com/github/mn81566/frontend-project-lvl2/test_coverage)

[![Node CI](https://github.com/mn81566/frontend-project-lvl2/workflows/Node%20CI/badge.svg)](https://github.com/mn81566/frontend-project-lvl2/actions)


## Сравнение json файлов
```sh
$ gendiff __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/wXWA2d6CC416TpDNKYpYTG390.svg)](https://asciinema.org/a/wXWA2d6CC416TpDNKYpYTG390)


## Сравнение yaml файлов
```sh
$ gendiff __fixtures__/file1.yml __fixtures__/file2.yml
```

[![asciicast](https://asciinema.org/a/mcSMrLvJVRaPmrs5Iuk3GMt84.svg)](https://asciinema.org/a/mcSMrLvJVRaPmrs5Iuk3GMt84)


## Рекурсивное сравнение
```sh
$ gendiff __fixtures__/fileRecurs1.json __fixtures__/fileRecurs2.json
```

[![asciicast](https://asciinema.org/a/P6Vm7RAeLEvSIEqbAmz3pMo2f.svg)](https://asciinema.org/a/P6Vm7RAeLEvSIEqbAmz3pMo2f)


## Плоский формат
```sh
$ gendiff -f plain __fixtures__/fileRecurs1.json __fixtures__/fileRecurs2.json
```

[![asciicast](https://asciinema.org/a/tMbNotpU3uEusiF9Ahim6Dk7J.svg)](https://asciinema.org/a/tMbNotpU3uEusiF9Ahim6Dk7J)
