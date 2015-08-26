/**
 * Module for common type structures and function interfaces
 */
interface Point {
    x: number;
    y: number;
};

interface IPropertiesCallback { (props: Map<string, string>): void };