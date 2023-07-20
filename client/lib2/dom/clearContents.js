import { getNode } from './getNode.js';

function clearContents(node) {
  if (typeof node === 'string') node = getNode(node);
  if (node.nodeName === 'INPUT' || node.Name === 'TEXTAREA') {
    node.value = '';
    return;
  }

  node.textContent = '';
}
