import { Model, Optional } from 'sequelize';
interface CuentaContableAttributes {
    id: string;
    codigo: string;
    nombre: string;
    descripcion?: string | null;
    tipo_cuenta: 'mayor' | 'auxiliar' | 'detalle';
    naturaleza: 'deudora' | 'acreedora';
    id_padre?: string | null;
    nivel: number;
    orden: number;
    id_inst: string;
    createdAt?: Date;
    updatedAt?: Date;
}
interface CuentaContableCreationAttributes extends Optional<CuentaContableAttributes, 'id' | 'createdAt' | 'updatedAt'> {
}
declare class CuentaContableModel extends Model<CuentaContableAttributes, CuentaContableCreationAttributes> implements CuentaContableAttributes {
    id: string;
    codigo: string;
    nombre: string;
    descripcion: string | null;
    tipo_cuenta: 'mayor' | 'auxiliar' | 'detalle';
    naturaleza: 'deudora' | 'acreedora';
    id_padre: string | null;
    nivel: number;
    orden: number;
    id_inst: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
    readonly padre?: CuentaContableModel;
    readonly hijos?: CuentaContableModel[];
}
export default CuentaContableModel;
//# sourceMappingURL=CuentaContable.model.d.ts.map