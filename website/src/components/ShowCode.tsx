import React from 'react';
import CodeBlock from '@theme/CodeBlock';

export default function ShowCode() {
    return (
        <div>
            <CodeBlock language="c" title="/src/components/HelloCodeTitle.js">
                {`
int main() {
  int y = SOME_MACRO_REFERENCE;
  int x = 5 + 6;
  cout << "Hello World! " << x << std::endl();
}
`}
            </CodeBlock>
        </div>
    );
}