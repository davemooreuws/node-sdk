// Copyright 2021, Nitric Technologies Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
// [START import]
import { documents } from '@nitric/sdk';
// [END import]

export async function setDocument() {
  // [START snippet]
  interface Product {
    id: string;
    name: string;
    description: string;
  }

  const docs = documents();

  const document = docs.collection<Product>('products').doc('nitric');

  await document.set({
    id: 'nitric',
    name: 'nitric',
    description: 'A development framework!',
  });
  // [END snippet]
  return true;
}
