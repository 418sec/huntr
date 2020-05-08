[cezerin](https://cezerin.com/)  is a React and Node.js based eCommerce platform.

Affected versions of this package are vulnerable to Improper Access Control. Certain internal attributes (e.g., paid and tax) within  `getValidDocumentForUpdate`  in  `src/api/server/services/orders/orders.js`  function can be overwritten via a conflicting name from user-input. As such, it is possible for a malicious customer to manipulate certain order status (i.e., payment status, tax) by adding additional attributes to user-input during checkout.
## References
-   [Vulnerability Walkthrough](https://github.com/cl0udz/vulnerabilities/blob/master/cezerin-manipulate_order_information/README.md)