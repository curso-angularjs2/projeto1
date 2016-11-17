# Aula 1 de AngularJS 2

Seja bem vindo a primeira aula de AngularJS 2!
Primeiro é necessário que você instale o Nodejs e o npm através do site https://nodejs.org.
Logo após baixar o Nodejs, crie uma pasta chamada projeto1.
Nessa pasta nós vamos criar nossos arquivos para o nosso primeiro projeto com AngularJS.

Bom crie primeiro um arquivo na raiz de projeto1 chamado
package.json com o seguinte código:

~~~json
{
  "name": "projeto1",
  "version": "1.0.0",
  "scripts": {
    "start": "tsc && concurrently \"tsc -w\" \"lite-server\" ",
    "lite": "lite-server",
    "tsc": "tsc",
    "tsc:w": "tsc -w"
  },
  "licenses": [
    {
      "type": "MIT",
      "url": "https://github.com/angular/angular.io/blob/master/LICENSE"
    }
  ],
  "dependencies": {
    "@angular/common": "~2.2.0",
    "@angular/compiler": "~2.2.0",
    "@angular/core": "~2.2.0",
    "@angular/forms": "~2.2.0",
    "@angular/http": "~2.2.0",
    "@angular/platform-browser": "~2.2.0",
    "@angular/platform-browser-dynamic": "~2.2.0",
    "@angular/router": "~3.2.0",
    "@angular/upgrade": "~2.2.0",
    "angular-in-memory-web-api": "~0.1.15",
    "core-js": "^2.4.1",
    "reflect-metadata": "^0.1.8",
    "rxjs": "5.0.0-beta.12",
    "systemjs": "0.19.39",
    "zone.js": "^0.6.25"
  },
  "devDependencies": {
    "@types/core-js": "^0.9.34",
    "@types/node": "^6.0.45",
    "concurrently": "^3.0.0",
    "lite-server": "^2.2.2",
    "typescript": "^2.0.3"
  }
}

~~~

Esse arquivo é conhecido para quem já utilizava o AngularJS 1, pois nele você consegue baixar os pacotes de libs através do npm, ou seja assim que você fizer o npm install serão baixadas todas as libs necessárias para o AngularJS 2.
Agora você vai criar outro arquivo na raiz do seu projeto chamado tsconfig.json com o seguinte código:

~~~json
//projeto1/tsconfig.json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  }
}

~~~

Esse é o arquivo de configuração do TypeScript onde você vai dizer em que versão do ES o TypeScript será compilado.
Agora vamos criar outro arquivo chamado systemjs.config.js com o seguinte código:

~~~javascript
//projeto1/systemjs.config.js
(function (global) {
  System.config({
    paths: {
      // Caminho das suas libs baixadas pelo npm
      'npm:': 'node_modules/'
    },
    // atributo onde carrega as libs necessárias
    map: {
      //pasta onde a aplicação funciona
      app: 'app',
      // angular
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@angular/upgrade': 'npm:@angular/upgrade/bundles/upgrade.umd.js',
      // outras libs
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js'
    },
    // pacotes necessários
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);

~~~

Agora basta você rodar na sua linha de comando o npm install:

~~~shell
npm install
~~~

Agora que você já baixou tudo que é necessário para utilizar o AngularJS, basta você criar sua pasta app dentro de projeto1.
Dentro da pasta app que você criou, crie um arquivo chamado app.module.ts que é o seu arquivo para a configuração do seu módulo em AngularJS com o seguinte código:

~~~javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports:      [ BrowserModule ]
})
export class AppModule { }

~~~

Logo após você vai criar o app.component.ts com o seguinte código:

~~~javascript
import { Component } from '@angular/core';
@Component({
  selector: 'projeto1',
  template: '<h1>Meu primeiro projeto em AngularJS!</h1>'
})
export class AppComponent { }

~~~

E agora vamos importar o AppComponent em nosso AppModule, assim o código ficará da seguinte forma:

~~~javascript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Adicionar essa linha
import { AppComponent }   from './app.component';
@NgModule({
  imports:      [ BrowserModule ],
  //Adicionar essa linha
  declarations: [ AppComponent ],
  //Adicionar essa linha
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

~~~

Agora vamos criar o nosso main.ts com o seguinte código:

~~~javascript

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);

~~~

Agora vamos criar o index.html com o seguinte código:


~~~html
<html>
  <head>
    <title>Projeto 1</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="node_modules/core-js/client/shim.min.js"></script>
    <script src="node_modules/zone.js/dist/zone.js"></script>
    <script src="node_modules/reflect-metadata/Reflect.js"></script>
    <script src="node_modules/systemjs/dist/system.src.js"></script>
    <!-- 2. Configuração -->
    <script src="systemjs.config.js"></script>
    <script>
      System.import('app').catch(function(err){ console.error(err); });
    </script>
  </head>

  <body>
    <projeto1>Carregando...</projeto1>
  </body>
</html>

~~~

Pronto! Agora basta executar o comando abaixo e acessar o http://localhost:3000 que você verá o seu primeiro projeto em AngularJS funcionando.

Listagem em AngularJS
===
Agora vamos criar um exemplo simples de uma listagem em AngularJS.
Primeiro precisamos criar o nosso objeto Usuario.
