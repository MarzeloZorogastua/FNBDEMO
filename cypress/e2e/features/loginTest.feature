Feature: Login Calidda

Background:
    Given Un usuario ingresa a la web Calidda

Scenario: F01_C01_Login Exitoso
    When El usuario ingresa las credenciales administrador web
    Then El usuario visualiza el estado de la plataforma

Scenario Outline: F01_C02_Login Erroneo Datos Incorrectos
    When El usuario ingresa las credenciales sin captcha '<username>' y '<password>'
    Then El usuario valida el mensaje de usuario o contraseña incorrecta

    Examples: 
    | username  | password  | 
    | test2      | test      |

Scenario Outline: F01_C03_Login Erroneo Catpcha
    When El usuario ingresa las credenciales sin captcha '<username>' y '<password>'
    Then El usuario valida el mensaje validar catpcha

    Examples: 
    | username  | password  | 
    | test2      | test      |

Scenario: F01_C04_Cierre Sesion
    When El usuario ingresa las credenciales administrador web
    Then El usuario cierra la sesion