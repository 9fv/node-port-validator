# node-port-validator: API Reference

**Warning !** Work in progress...

## Classes

<dl>
<dt><a href="#PortValidatorError">PortValidatorError</a></dt>
<dd><p>A custom error for {PortValidator}.</p>
</dd>
<dt><a href="#PortValidator">PortValidator</a></dt>
<dd><p>{PortValidator} class.</p>
</dd>
</dl>

## Constants

<dl>
<dt><a href="#_">_</a></dt>
<dd><p>This file is part of node-port-validator</p>
<p>Copyright (c) 2018 SAS 9 Février.</p>
<p>Distributed under the MIT License (license terms are at <a href="http://opensource.org/licenses/MIT">http://opensource.org/licenses/MIT</a>).</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#portValidator">portValidator(value)</a></dt>
<dd><p>A factory for {PortValidator}.</p>
</dd>
</dl>

<a name="PortValidatorError"></a>

## PortValidatorError
A custom error for {PortValidator}.

**Kind**: global class  
**Access**: public  
<a name="new_PortValidatorError_new"></a>

### new PortValidatorError(...args)
Create a new instance of {PortValidatorError}.


| Param | Description |
| --- | --- |
| ...args | The arguments. |

<a name="PortValidator"></a>

## PortValidator
{PortValidator} class.

**Kind**: global class  
**Access**: public  

* [PortValidator](#PortValidator)
    * [new PortValidator(value)](#new_PortValidator_new)
    * _instance_
        * [.validate()](#PortValidator+validate) ⇒ <code>boolean</code>
    * _static_
        * [.checkParameters(value)](#PortValidator.checkParameters)
        * [.convertPortNumberToInteger(value)](#PortValidator.convertPortNumberToInteger) ⇒ <code>number</code>
        * [.factory(value)](#PortValidator.factory) ⇒ [<code>PortValidator</code>](#PortValidator)

<a name="new_PortValidator_new"></a>

### new PortValidator(value)
Create a new instance of {PortValidator}.


| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | A port for network communications. |

<a name="PortValidator+validate"></a>

### portValidator.validate() ⇒ <code>boolean</code>
Validate the port formatting.

**Kind**: instance method of [<code>PortValidator</code>](#PortValidator)  
**Returns**: <code>boolean</code> - True if the port formatting is correct. False else.  
<a name="PortValidator.checkParameters"></a>

### PortValidator.checkParameters(value)
Check if provided parameter(s) are correctly typed.

**Kind**: static method of [<code>PortValidator</code>](#PortValidator)  

| Param | Description |
| --- | --- |
| value | The value. |

<a name="PortValidator.convertPortNumberToInteger"></a>

### PortValidator.convertPortNumberToInteger(value) ⇒ <code>number</code>
Convert the provided value as an integer.

**Kind**: static method of [<code>PortValidator</code>](#PortValidator)  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | A port number. |

<a name="PortValidator.factory"></a>

### PortValidator.factory(value) ⇒ [<code>PortValidator</code>](#PortValidator)
A factory for {PortValidator}.

**Kind**: static method of [<code>PortValidator</code>](#PortValidator)  
**Returns**: [<code>PortValidator</code>](#PortValidator) - An instance of {PortValidator}.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | The port number to validate. |

<a name="_"></a>

## _
This file is part of node-port-validator

Copyright (c) 2018 SAS 9 Février.

Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).

**Kind**: global constant  
<a name="portValidator"></a>

## portValidator(value)
A factory for {PortValidator}.

**Kind**: global function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>string</code> \| <code>number</code> | The port number to validate. |


## <a name="license"> License

>
> [The MIT License](https://opensource.org/licenses/MIT)
>
> Copyright (c) 2018 SAS 9 Février
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
>AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
> SOFTWARE.
>
