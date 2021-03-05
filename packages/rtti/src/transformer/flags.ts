import ts from 'typescript';
import { F_ABSTRACT, F_PRIVATE, F_PROTECTED, F_PUBLIC, F_READONLY } from '../common';
export * from '../common/flags';

export function getVisibility(modifiers : ts.ModifiersArray) {
    if (modifiers) {
        if (modifiers.some(x => x.kind === ts.SyntaxKind.PublicKeyword))
            return F_PUBLIC;
        if (modifiers.some(x => x.kind === ts.SyntaxKind.PrivateKeyword))
            return F_PRIVATE;
        if (modifiers.some(x => x.kind === ts.SyntaxKind.ProtectedKeyword))
            return F_PROTECTED;
    }

    return F_PUBLIC;
}

export function isReadOnly(modifiers : ts.ModifiersArray) {
    if (!modifiers)
        return '';
    
    return modifiers.some(x => x.kind === ts.SyntaxKind.ReadonlyKeyword) ? F_READONLY : '';
}

export function isAbstract(modifiers : ts.ModifiersArray) {
    if (!modifiers)
        return '';
    
    return modifiers.some(x => x.kind === ts.SyntaxKind.AbstractKeyword) ? F_ABSTRACT : '';
}