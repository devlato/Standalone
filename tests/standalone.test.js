import test from 'ava';

test('should be able to create a component;', t => {

    const node = document.createElement('x-clock');
    const element = document.body.appendChild(node);

    t.true(element.constructor === window.HTMLElement);
    t.is(element.querySelectorAll('div').length, 1);

});

test.only('should be able to create a component with attributes;', t => {

    const element = document.createElement('mars-weather');
    element.setAttribute('data-unit', 'C');
    document.body.appendChild(element);

    t.true(element.constructor === window.HTMLElement);
    console.log(element.outerHTML);
    // t.is(element.querySelectorAll('section').length, 1);

});
