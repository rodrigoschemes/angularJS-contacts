angular
  .module('app')
  .component('app', {
    templateUrl: 'app/hello.html',
    
    controller: function (ContactFactory) {
      var vm = this;
      var id = 0;

      vm.hero = 'New contact';
      vm.heroList = 'List a contacts';
      vm.list = [];

      vm.form = {
        id       : 0,
        name     : '',
        telephone: '',
        email    : ''
      };

      vm.add  = add;
      vm.edit = edit;
      vm.remove = remove;

      (function onInit() {
        return vm.list = ContactFactory.list();
      })();

      function add(contact) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

        if (contact.id) {
          clean();
          return ContactFactory.edit(contact);
        }

        contact.id = id = id + 1;

        clean();
        ContactFactory.add(contact);
      }

      function edit(contact, indexList) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

        vm.form.name      = contact.name;
        vm.form.telephone = contact.telephone;
        vm.form.email     = contact.email;
        vm.form.id        = contact.id;
      }

      function remove(contact) {
        if (!contact) {
          alert('You must need a valid contact');
          return;
        }

       return ContactFactory.remove(contact);
      }

      function clean() {
        return vm.form = {
          id       : 0,
          name     : '',
          telephone: '',
          email    : ''
        };
      }
    }
  });