angular.module("gettext").run(['gettextCatalog', function (gettextCatalog) {
    gettextCatalog.setStrings('nl', {"Mark all as complete":"Markeer als afgewerkt","<strong>{{remainingCount}}</strong> item left":["<strong>{{remainingCount}}</strong> todo te gaan","<strong>{{remainingCount}}</strong> todos te gaan"],"All":"Alle","Active":"Actief","Completed":"Afgewerkt","Clear completed ({{completedCount}})":"Wis afgewerkte taken ({{completedCount}})","Double-click to edit a todo":"Dubbelklik om een todo te bewerken","What needs to be done?":"Wat moet gedaan worden?"});

}]);