"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProveedorDTO = void 0;
class ProveedorDTO {
    constructor(nombre_proveedor, telefono, direccion, estado, id_cliente) {
        this.nombre_proveedor = nombre_proveedor;
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
        this.id_cliente = id_cliente;
        this.telefono = telefono;
        this.direccion = direccion;
        this.estado = estado;
        this.nombre_proveedor = nombre_proveedor;
        this.id_cliente = id_cliente;
    }
    getNombreProveedor() {
        return this.nombre_proveedor;
    }
    getTelefono() {
        return this.telefono;
    }
    getDireccion() {
        return this.direccion;
    }
    getEstado() {
        return this.estado;
    }
    getIdCliente() {
        return this.id_cliente;
    }
}
exports.ProveedorDTO = ProveedorDTO;
//# sourceMappingURL=proveedor.dto.js.map