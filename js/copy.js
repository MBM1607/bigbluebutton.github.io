'use strict';

const addCopyButton = codeBlock => {
  const copyButton = document.createElement('button');
  copyButton.type = 'button';
  copyButton.ariaLabel = 'Copy code to clipboard';
  copyButton.innerText = 'Copy';

  codeBlock.append(copyButton);

  copyButton.addEventListener('click', () => {
    window.navigator.clipboard.writeText(
      codeBlock.querySelector('code').innerText.trim()
    );

    copyButton.innerText = 'Copied';

    setTimeout(() => (copyButton.innerText = 'Copy'), 4000);
  });
};

document.addEventListener(
  'DOMContentLoaded',
  document.querySelectorAll('pre.highlight').forEach(addCopyButton)
);
