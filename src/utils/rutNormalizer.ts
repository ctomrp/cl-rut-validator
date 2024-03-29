/**
 * Accepts a String as a parameter
 * @param rut Complete RUT as a String. e.g.: 11222333k
 */
export function rutNormalizer(rut: string): string;
/**
 * Accepts two Strings as parameters
 * @param rutNumber Numeric section as a String. e.g.: 11222333
 * @param dv Dv Section as a String. e.g.: k
 */
export function rutNormalizer(rutNumber: string, dv: string): string;
/**
 * Accepts two Strings as parameters
 * @param rut Numeric section as a String. e.g.: 11222333
 * @param dv Dv Section as a String. e.g.: k
 */
export function rutNormalizer(rut: string, dv?: string): string {
    if (typeof dv === 'undefined') {
        return rut.replace(/[^\dkK\d]/g, '');
    } else {
        return (rut + dv).replace(/[^\dkK\d]/g, '');
    }
}