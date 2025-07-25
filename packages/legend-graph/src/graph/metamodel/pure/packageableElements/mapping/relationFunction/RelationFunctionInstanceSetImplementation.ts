/**
 * Copyright (c) 2025-present, Goldman Sachs
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { type Hashable, hashArray } from '@finos/legend-shared';
import { CORE_HASH_STRUCTURE } from '../../../../../Core_HashUtils.js';
import type { SetImplementationVisitor } from '../SetImplementation.js';
import type { ConcreteFunctionDefinition } from '../../function/ConcreteFunctionDefinition.js';
import { InstanceSetImplementation } from '../InstanceSetImplementation.js';

export class RelationFunctionInstanceSetImplementation
  extends InstanceSetImplementation
  implements Hashable
{
  relationFunction?: ConcreteFunctionDefinition;

  override accept_SetImplementationVisitor<T>(
    visitor: SetImplementationVisitor<T>,
  ): T {
    return visitor.visit_RelationFunctionInstanceSetImplementation(this);
  }

  override get hashCode(): string {
    return hashArray([
      CORE_HASH_STRUCTURE.RELATION_FUNCTION_INSTANCE_SET_IMPLEMENTATION,
      super.hashCode,
      hashArray(this.propertyMappings),
    ]);
  }
}
