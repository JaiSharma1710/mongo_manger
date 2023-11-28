import toast from 'react-hot-toast';

export const runQuery = () => {
  const selectedQuery = getSelectedText();

  if (!selectedQuery) {
    toast.error('no query selected');
  }

  console.log(selectedQuery, 'run');
};

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    return document.selection.createRange().text;
  }
  return '';
}
