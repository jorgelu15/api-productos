"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoEntity = void 0;
class ProductoEntity {
    constructor(id_producto, nombre, codigo, categoria_id, marca_id, unidad_medida_id, impuesto_id, proveedor_id, foto_url, estado, id_inst, updatedAt, createdAt) {
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.codigo = codigo;
        this.categoria_id = categoria_id;
        this.marca_id = marca_id;
        this.unidad_medida_id = unidad_medida_id;
        this.impuesto_id = impuesto_id;
        this.proveedor_id = proveedor_id;
        this.foto_url = foto_url;
        this.estado = estado;
        this.id_inst = id_inst;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
        this.id_producto = id_producto;
        this.nombre = nombre;
        this.codigo = codigo;
        this.categoria_id = categoria_id;
        this.marca_id = marca_id;
        this.unidad_medida_id = unidad_medida_id;
        this.impuesto_id = impuesto_id;
        this.proveedor_id = proveedor_id;
        this.foto_url = foto_url;
        this.estado = estado;
        this.id_inst = id_inst;
        this.updatedAt = updatedAt;
        this.createdAt = createdAt;
    }
    // Getters and Setters
    getIdProducto() {
        return this.id_producto;
    }
    getNombre() {
        return this.nombre;
    }
    getCodigo() {
        return this.codigo;
    }
    getCategoriaId() {
        return this.categoria_id;
    }
    getMarcaId() {
        return this.marca_id;
    }
    getUnidadMedidaId() {
        return this.unidad_medida_id;
    }
    getImpuestoId() {
        return this.impuesto_id;
    }
    getProveedorId() {
        return this.proveedor_id;
    }
    getFotoUrl() {
        return this.foto_url;
    }
    getEstado() {
        return this.estado;
    }
    getIdInst() {
        return this.id_inst;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    setIdProducto(id_producto) {
        this.id_producto = id_producto;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    setCodigo(codigo) {
        this.codigo = codigo;
    }
    setCategoriaId(categoria_id) {
        this.categoria_id = categoria_id;
    }
    setMarcaId(marca_id) {
        this.marca_id = marca_id;
    }
    setUnidadMedidaId(unidad_medida_id) {
        this.unidad_medida_id = unidad_medida_id;
    }
    setImpuestoId(impuesto_id) {
        this.impuesto_id = impuesto_id;
    }
    setProveedorId(proveedor_id) {
        this.proveedor_id = proveedor_id;
    }
    setFotoUrl(foto_url) {
        this.foto_url = foto_url;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    setIdInst(id_inst) {
        this.id_inst = id_inst;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
}
exports.ProductoEntity = ProductoEntity;
//# sourceMappingURL=producto.entity.js.map