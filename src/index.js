'use strict';

const $app = document.getElementById('app');
const $tagsInput = document.getElementById('tags-input');
const $tagsList = document.getElementById('tags-list');
const $tagsInput2 = document.getElementById('tags-input2');
const $tagsList2 = document.getElementById('tags-list2');
const tagsArr = ['1', 'super tag'];

$tagsInput.addEventListener('keyup', ({key, target}) => {
  if (key === 'Enter' && target.value.trim()) {
    const $el = createTagElement(target.value);
    const isElementExist = tagsArr.includes(target.value);

    if (!isElementExist) {
      $tagsList.appendChild($el);
      tagsArr.push(target.value);
      target.value = '';
    }
  }
});

$tagsInput2.addEventListener('keyup', ({key, target}) => {
  if (key === 'Enter' && target.value.trim()) {
    const $el = createTagElement(target.value);
    const isElementExist = tagsArr.includes(target.value);

    if (!isElementExist) {
      $tagsList2.appendChild($el);
      tagsArr.push(target.value);
      target.value = '';
    }
  }
});

$tagsList.addEventListener('click', event => {
  const {target} = event;
  const isRemoveBtn = target.classList.contains('remove-btn');
  const $foo = target.parentElement.parentElement;
  const $tag = target.parentElement;

  if (isRemoveBtn) {
    $foo.removeChild($tag);
  }
});

const createTagElement = content => {
  const $li = document.createElement('li');

  $li.className = 'tags-list-item';
  $li.innerHTML = `
    <span class="tag-name">${content}</span>
    <span class="remove-btn">x</span>
  `;

  return $li;
};

const init = () => {
  tagsArr.forEach(tagValue => {
    const $el = createTagElement(tagValue);

    $tagsList2.appendChild($el);
  });
};

const rmBtn = document.createElement("input");
      rmBtn.className = "removeButton";
      rmBtn.type = "submit";
      rmBtn.innerHTML = "Delete all";
      rmBtn.value = "Delete elements";

      $app.append(rmBtn);

      rmBtn.addEventListener('click', event => {
        while($tagsList2.firstChild) {
          $tagsList2.removeChild($tagsList2.firstChild);
        }
      });


init();
